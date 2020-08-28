import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'Hooks';
import { createProjectValidation } from 'Validators';
import { createProject } from 'Redux/actions/projectsActions';
import { useHistory, Redirect } from 'react-router-dom';
import { PROJECT_MANAGER_ROLE_ID } from 'Constants/roles';
import callApi from 'Services/callApi';
import Form from 'react-bootstrap/Form';
const INITIAL_VALUE = {
  name: { value: '', error: '' },
  description: { value: '', error: '' },
  projectManager: { value: '', error: '' }
};

/**
 * Project Component.
 *
 * @param props
 */
function ProjectsCreate(props) {
  const dispatch = useDispatch();
  const { errors: reduxError } = useSelector((state) => state.errors);
  const { redirect } = useSelector((state) => state.projects);
  const [projectManagers, setProjectManagers] = useState([]);

  useEffect(() => {
    callApi(
      {
        url: '/users/role',
        method: 'POST'
      },
      {
        id: PROJECT_MANAGER_ROLE_ID
      }
    ).then((data) => {
      setProjectManagers(data.response.data);
    });
  }, []);

  const onSubmitForm = (state) => {
    console.log(values);
    dispatch(createProject(values));
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable } = useForm(
    INITIAL_VALUE,
    createProjectValidation,
    onSubmitForm
  );

  if (redirect) {
    return <Redirect to={{ pathname: '/projects' }}></Redirect>;
  }

  return (
    <div className="card">
      <div className="card-header">Create User</div>
      <div className="card-body">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              name="name"
              value={values.name}
              onChange={handleOnChange}
            />
            {errors.name && dirty.name && <p className="error">{errors.name}</p>}
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
            <label htmlFor="projectManager">Project Manager</label>
            <select
              className="form-control"
              id="projectManager"
              name="projectManager"
              value={values.projectManager}
              onChange={handleOnChange}
            >
              <option value="">Select Project Manager</option>
              {projectManagers &&
                projectManagers.map((projectManager) => (
                  <option key={projectManager.id} value={projectManager.id}>
                    {projectManager.name}
                  </option>
                ))}
            </select>
            {errors.projectManager && dirty.projectManager && <p className="error">{errors.projectManager}</p>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={disable}>
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProjectsCreate;
