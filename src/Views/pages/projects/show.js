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
      <div className="card-header">Show Project</div>
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
                  <th>Email</th>
                  <th>Actions</th>
                </tr>

                {project.users &&
                  project.users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link to={`/users/edit/${user.id}`} className="btn btn-warning">
                          Edit
                        </Link>
                        <Link to={`/users/show/${user.id}`} className="btn btn-primary">
                          Show
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Tasks</div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Task Title</th>
                  <th>Description</th>
                  <th>Assignee</th>
                  <th>Tagged</th>
                  <th>Actions</th>
                </tr>

                {project.tasks &&
                  project.tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{task.assignedUser.name}</td>
                      <td>
                        <ul className="list-group">
                          {!_.isEmpty(task.taggedUsers) &&
                            task.taggedUsers.map((taggedUser) => (
                              <li key={taggedUser.id} className="list-group-item">
                                {taggedUser.name}
                              </li>
                            ))}
                        </ul>
                      </td>
                      <td>
                        <Link to={`/tasks/edit/${task.id}`} className="btn btn-warning">
                          Edit
                        </Link>
                        <Link to={`/tasks/show/${task.id}`} className="btn btn-primary">
                          Show
                        </Link>
                      </td>
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
