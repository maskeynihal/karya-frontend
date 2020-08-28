import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from 'Redux/actions/usersActions';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import _ from 'loadsh';
/**
 * Project Component.
 *
 * @param props
 */
function UsersShow(props) {
  const dispatch = useDispatch();
  const { id: userId } = props.match.params;
  const user = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    dispatch(showUser(userId));
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
                  <td>{user.name || ''}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email || ''}</td>
                </tr>
                <tr>
                  <th>Role</th>
                  <td>{(!_.isEmpty(user.role) && user.role[0].name) || ''}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Projects</div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>

                {user.projects &&
                  user.projects.map((project) => (
                    <tr key={project.id}>
                      <th>{project.name}</th>
                      <th>
                        <Link to={`/projects/edit/${project.id}`} className="btn btn-warning">
                          Edit
                        </Link>
                        <Link to={`/projects/show/${project.id}`} className="btn btn-primary">
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

export default UsersShow;
