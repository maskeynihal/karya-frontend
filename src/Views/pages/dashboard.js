import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Dashboard.
 */
function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <ul className="list-group">
        <Link className="list-group-item" to={'/users'}>
          Users
        </Link>
        <Link className="list-group-item" to={'/projects'}>
          Projects
        </Link>
        <Link className="list-group-item" to={'/tasks'}>
          Task
        </Link>
        <Link className="list-group-item">
          <div className="btn btn-warning">LOGOUT</div>
        </Link>
      </ul>
    </>
  );
}

export default Dashboard;
