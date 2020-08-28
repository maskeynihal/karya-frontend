import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'loadsh';
import { getAllTasks } from 'Redux/actions/tasksActions';
/**
 * Task Component.
 */
function Tasks() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-8">TASKS</div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Deadline</th>
              <th scope="col">Assigned User</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task) => (
                <tr key={task.id}>
                  <th scope="row">{task.id}</th>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{Date(task.deadline)}</td>
                  <td>{!_.isEmpty(task.assignedUser) && task.assignedUser.name}</td>
                  <td>
                    <Link to={`/projects/${task.project_id}/tasks/edit/${task.id}`} className="btn btn-warning">
                      Edit
                    </Link>
                    <Link to={`/projects/${task.project_id}/tasks/show/${task.id}`} className="btn btn-primary">
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

export default Tasks;
