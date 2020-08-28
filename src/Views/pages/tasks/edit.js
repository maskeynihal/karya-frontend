import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'loadsh';
import { useForm } from 'Hooks';
import { createTaskValidation } from 'Validators';
import { editTask, redirectToggle } from 'Redux/actions/tasksActions';
import { useHistory, Redirect } from 'react-router-dom';

import { showTask } from 'Redux/actions/tasksActions';
import { PROJECT_MANAGER_ROLE_ID, TEAM_LEAD_ROLE_ID, ENGINEER_ROLE_ID } from 'Constants/roles';
import callApi from 'Services/callApi';

// const INITIAL_VALUE = {
//   name: { value: '', error: '' },
//   description: { value: '', error: '' },
//   projectManager: { value: '', error: '' }
// };

/**
 * Task Component.
 *
 * @param props
 */
function TaskEdit(props) {
  const dispatch = useDispatch();
  const { projectId, id: taskId } = props.match.params;
  const task = useSelector((state) => state.tasks.currentTask);
  const history = useHistory();

  useEffect(() => {
    dispatch(showTask(taskId));
  }, []);

  const INITIAL_VALUE = {
    name: { value: task.title || '', error: '' },
    description: { value: task.description || '', error: '' },
    deadline: { value: task.deadline || '', error: '' },
    assigneeId: { value: (!_.isEmpty(task.assigneeId) && task.assigneeId.id) || 4, error: '' }
  };

  const { errors: reduxError } = useSelector((state) => state.errors);
  const { redirect } = useSelector((state) => state.tasks);

  const [users, setUsers] = useState([]);

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
    dispatch(editTask(task.id, { ...values, projectId }));
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable, setInitialFormValue } = useForm(
    INITIAL_VALUE,
    createTaskValidation,
    onSubmitForm,
    false,
    true
  );

  useMemo(() => {
    setInitialFormValue({
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      assigneeId: !_.isEmpty(task.assigneeId) && task.assigneeId.id
    });
  }, [task]);

  if (redirect) {
    dispatch(redirectToggle(false));
    history.push(`/projects/show/${projectId}`);
  }

  return (
    <div className="card">
      <div className="card-header">Edit Task</div>
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
              defaultValue={values.assigneeId}
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
            Edit Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskEdit;
