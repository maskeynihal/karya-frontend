import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'loadsh';
import { getAllProjects } from 'Redux/actions/projectsActions';
/**
 * Project Component.
 */
function Projects() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  // useMemo(() => console.log('memo', projects), [projects]);

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-8">USERS</div>
          <div className="col-4 text-right">
            <Link to={'/projects/create'} className="btn btn-primary">
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
              <th scope="col">Description</th>
              <th scope="col">Project Manager</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map((project) => (
                <tr key={project.id}>
                  <th scope="row">{project.id}</th>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{!_.isEmpty(project.projectManager) && project.projectManager.name}</td>
                  <td>
                    <Link to={`/projects/edit/${project.id}`} className="btn btn-warning">
                      Edit
                    </Link>
                    <Link to={`/projects/show/${project.id}`} className="btn btn-primary">
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

export default Projects;
