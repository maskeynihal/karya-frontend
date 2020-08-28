import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'loadsh';
import { useForm } from 'Hooks';
import { createProjectValidation } from 'Validators';
import { editProject } from 'Redux/actions/projectsActions';
import { useHistory, Redirect } from 'react-router-dom';

import { showProject } from 'Redux/actions/projectsActions';
import { PROJECT_MANAGER_ROLE_ID } from 'Constants/roles';
import callApi from 'Services/callApi';

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
function ProjectEdit(props) {
  const dispatch = useDispatch();
  const { id: projectId } = props.match.params;
  const project = useSelector((state) => state.projects.currentProject);

  useEffect(() => {
    dispatch(showProject(projectId));
  }, []);

  const INITIAL_VALUE = {
    name: { value: project.name || '', error: '' },
    email: { value: project.email || '', error: '' },
    password: { value: project.password || '', error: '' },
    roleId: { value: (!_.isEmpty(project.role) && project.role[0].id) || 4, error: '' }
  };

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
    dispatch(editProject(project.id, values));
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable, setInitialFormValue } = useForm(
    INITIAL_VALUE,
    createProjectValidation,
    onSubmitForm,
    false,
    true
  );

  useMemo(() => {
    setInitialFormValue({
      name: project.name,
      description: project.description,
      projectManager: !_.isEmpty(project.projectManager) && project.projectManager.id
    });
  }, [project]);

  if (redirect) {
    return <Redirect to={{ pathname: '/projects' }}></Redirect>;
  }

  return (
    <div className="card">
      <div className="card-header">Create Project</div>
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
            >
              {values.description}
            </textarea>
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
          <button type="submit" className="btn btn-primary">
            Edit Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProjectEdit;
