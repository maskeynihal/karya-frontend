import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllUsers } from 'Redux/actions/usersActions';
/**
 * Project Component.
 */
function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  // useMemo(() => console.log('memo', users), [users]);

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-8">USERS</div>
          <div className="col-4 text-right">
            <Link to={'/users/create'} className="btn btn-primary">
              Create User
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role && user.role[0]?.name}</td>
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
  );
}

export default Users;
