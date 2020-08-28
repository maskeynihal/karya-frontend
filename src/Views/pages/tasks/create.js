import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'Hooks';
import { createTaskValidation } from 'Validators';
import { createTask, redirectToggle } from 'Redux/actions/tasksActions';
import { useHistory } from 'react-router-dom';
import { PROJECT_MANAGER_ROLE_ID, TEAM_LEAD_ROLE_ID, ENGINEER_ROLE_ID } from 'Constants/roles';
import callApi from 'Services/callApi';

const INITIAL_VALUE = {
  title: { value: '', error: '' },
  description: { value: '', error: '' },
  deadline: { value: '', error: '' },
  assigneeId: { value: '', error: '' }
};

/**
 * Task Component.
 *
 * @param props
 */
function TasksCreate(props) {
  const dispatch = useDispatch();
  const { errors: reduxError } = useSelector((state) => state.errors);
  const { redirect } = useSelector((state) => state.tasks);
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const { projectId } = props.match.params;

  useEffect(() => {
    callApi(
      {
        url: '/users/role',
        method: 'POST'
      },
      {
        id: [PROJECT_MANAGER_ROLE_ID, TEAM_LEAD_ROLE_ID, ENGINEER_ROLE_ID]
      }
    ).then((data) => {
      setUsers(data.response.data);
    });
  }, []);

  const onSubmitForm = (state) => {
    dispatch(createTask({ ...values, projectId }));
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable } = useForm(
    INITIAL_VALUE,
    createTaskValidation,
    onSubmitForm
  );

  if (redirect) {
    dispatch(redirectToggle(false));
    history.push(`/projects/show/${projectId}`);
  }

  return (
    <div className="card">
      <div className="card-header">Create Task</div>
      <div className="card-body">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="title"
              name="title"
              value={values.title}
              onChange={handleOnChange}
            />
            {errors.title && dirty.title && <p className="error">{errors.title}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="description"
              className="form-control"
              id="description"
              aria-describedby="description"
              name="description"
              value={values.description}
              onChange={handleOnChange}
            />
            {errors.description && dirty.description && <p className="error">{errors.description}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Deadline</label>
            <input
              className="form-control"
              type="date"
              id="deadline"
              aria-describedby="deadline"
              name="deadline"
              value={values.deadline}
              onChange={handleOnChange}
            />
            {errors.deadline && dirty.deadline && <p className="error">{errors.deadline}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="assigneeId">Assignee</label>
            <select
              className="form-control"
              id="assigneeId"
              name="assigneeId"
              value={values.assigneeId}
              onChange={handleOnChange}
            >
              <option value="">Select Assignee</option>
              {users &&
                users.map((assigneeId) => (
                  <option key={assigneeId.id} value={assigneeId.id}>
                    {assigneeId.name}
                  </option>
                ))}
            </select>
            {errors.assigneeId && dirty.assigneeId && <p className="error">{errors.assigneeId}</p>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={disable}>
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TasksCreate;
