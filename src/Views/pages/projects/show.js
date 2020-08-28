import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showProject } from 'Redux/actions/projectsActions';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import _ from 'loadsh';
/**
 * Project Component.
 *
 * @param props
 */
function ProjectShow(props) {
  const dispatch = useDispatch();
  const { id: projectId } = props.match.params;
  const project = useSelector((state) => state.projects.currentProject);

  useEffect(() => {
    dispatch(showProject(projectId));
  }, []);

  return (
    <div className="card">
      <div className="card-header">Show User</div>
      <div className="card-body">
        <div className="card">
          <div className="card-header">User Information</div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{project.name || ''}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{project.description || ''}</td>
                </tr>
                <tr>
                  <th>Project Manager</th>
                  <td>{(!_.isEmpty(project.projectManager) && project.projectManager.name) || ''}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Users Related</div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>email</th>
                </tr>

                {project.users &&
                  project.users.map((user) => (
                    <tr key={user.id}>
                      <th>{user.name}</th>
                      <th>
                        <Link to={`/users/edit/${user.id}`} className="btn btn-warning">
                          Edit
                        </Link>
                        <Link to={`/users/show/${user.id}`} className="btn btn-primary">
                          Show
                        </Link>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShow;
