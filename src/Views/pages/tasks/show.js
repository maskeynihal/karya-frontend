import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showTask } from 'Redux/actions/tasksActions';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import _ from 'loadsh';
/**
 * Task Component.
 *
 * @param props
 */
function TaskShow(props) {
  const dispatch = useDispatch();
  const { projectId, id: taskId } = props.match.params;
  const task = useSelector((state) => state.tasks.currentTask);

  useEffect(() => {
    dispatch(showTask(taskId));
  }, []);

  return (
    <div className="card">
      <div className="card-header">Show Task</div>
      <div className="card-body">
        <div className="card">
          <div className="card-header">Task Information</div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{task.title || ''}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{task.description || ''}</td>
                </tr>
                <tr>
                  <th>Task Assigned To</th>
                  <td>{(!_.isEmpty(task.assignedUser) && task.assignedUser.name) || ''}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Tagged User</div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>

                {task.taggedUsers &&
                  task.taggedUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Comments</div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Comment</th>
                  <th>Commenter</th>
                  <th>Comment Date</th>
                  <th>Actions</th>
                </tr>

                {task.comments &&
                  task.comments.map((comment) => (
                    <tr key={comment.id}>
                      <td>{comment.text}</td>
                      <td>{comment.commenter.name}</td>
                      <td>{comment.created_at}</td>
                      <td>
                        <Link to={`/comments/edit/${task.id}`} className="btn btn-warning">
                          Edit
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

export default TaskShow;
