import { GET_ALL_PROJECTS_URL, CREATE_PROJECT_URL } from 'Constants/api';
import callApi from 'Services/callApi';

import { browser } from 'react-router-dom';

export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';
export const GET_PROJECTS_STARTED = 'GET_PROJECTS_STARTED';

export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const SHOW_PROJECT_SUCCESS = 'SHOW_PROJECT_SUCCESS';
export const EDIT_PROJECT_SUCCESS = 'EDIT_PROJECT_SUCCESS';

export const getAllProjects = (projects) => async (dispatch) => {
  dispatch(getProjectStarted());
  try {
    const data = await callApi(GET_ALL_PROJECTS_URL, {});

    dispatch(getProjectSuccess(data));
  } catch (error) {
    dispatch(getProjectFailure(error));
  }
};

export const createProject = (project) => async (dispatch) => {
  dispatch(getProjectStarted());
  try {
    const data = await callApi(CREATE_PROJECT_URL, {
      name: project.name,
      description: project.description,
      project_manager_id: parseInt(project.projectManager)
    });

    dispatch(createProjectSuccess(data));
  } catch (error) {
    dispatch(getProjectFailure(error));
  }
};

export const showProject = (projectId) => async (dispatch) => {
  dispatch(getProjectStarted());
  try {
    const data = await callApi({
      url: `/projects/${projectId}`,
      method: 'GET'
    });

    dispatch(showProjectSuccess(data));
  } catch (error) {
    dispatch(getProjectFailure(error));
  }
};

export const editProject = (projectId, project) => async (dispatch) => {
  dispatch(getProjectStarted());
  try {
    const data = await callApi(
      {
        url: `/projects/${projectId}`,
        method: 'PUT'
      },
      {
        name: project.name,
        description: project.description,
        project_manager_id: parseInt(project.projectManager)
      }
    );

    dispatch(editProjectSuccess(data));
  } catch (error) {
    dispatch(getProjectFailure(error));
  }
};

const showProjectSuccess = (project) => {
  return { type: SHOW_PROJECT_SUCCESS, payload: project };
};

const createProjectSuccess = (project) => {
  return { type: CREATE_PROJECT_SUCCESS, payload: project };
};

const editProjectSuccess = (project) => {
  return { type: EDIT_PROJECT_SUCCESS, payload: project };
};

const getProjectSuccess = (projects) => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projects
});

const getProjectFailure = (error) => ({
  type: GET_PROJECTS_FAILURE,
  payload: error
});

const getProjectStarted = () => ({ type: GET_PROJECTS_STARTED });
