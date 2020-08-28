import { GET_ALL_TASKS_URL, CREATE_TASK_URL } from 'Constants/api';
import callApi from 'Services/callApi';

export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';
export const GET_TASKS_STARTED = 'GET_TASKS_STARTED';

export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const SHOW_TASK_SUCCESS = 'SHOW_TASK_SUCCESS';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';

export const REDIRECT_TOGGLE = 'REDIRECT_TOGGLE';

export const getAllTasks = (tasks) => async (dispatch) => {
  dispatch(getTaskStarted());
  try {
    const data = await callApi(GET_ALL_TASKS_URL, {});

    dispatch(getTaskSuccess(data));
  } catch (error) {
    dispatch(getTaskFailure(error));
  }
};

export const createTask = (task) => async (dispatch) => {
  dispatch(getTaskStarted());
  try {
    const data = await callApi(CREATE_TASK_URL, {
      title: task.title,
      description: task.description,
      assignee_id: parseInt(task.assigneeId),
      deadline: task.deadline,
      project_id: task.projectId
    });

    dispatch(createTaskSuccess(data));
  } catch (error) {
    dispatch(getTaskFailure(error));
  }
};

export const showTask = (taskId) => async (dispatch) => {
  dispatch(getTaskStarted());
  try {
    const data = await callApi({
      url: `/tasks/${taskId}`,
      method: 'GET'
    });

    dispatch(showTaskSuccess(data));
  } catch (error) {
    dispatch(getTaskFailure(error));
  }
};

export const editTask = (taskId, task) => async (dispatch) => {
  dispatch(getTaskStarted());
  try {
    const data = await callApi(
      {
        url: `/tasks/${taskId}`,
        method: 'PUT'
      },
      {
        title: task.title,
        description: task.description,
        assignee_id: parseInt(task.assigneeId),
        deadline: task.deadline,
        project_id: task.projectId
      }
    );

    dispatch(editTaskSuccess(data));
  } catch (error) {
    dispatch(getTaskFailure(error));
  }
};

const showTaskSuccess = (task) => {
  return { type: SHOW_TASK_SUCCESS, payload: task };
};

const createTaskSuccess = (task) => {
  return { type: CREATE_TASK_SUCCESS, payload: task };
};

const editTaskSuccess = (task) => {
  return { type: EDIT_TASK_SUCCESS, payload: task };
};

const getTaskSuccess = (tasks) => ({
  type: GET_TASKS_SUCCESS,
  payload: tasks
});

const getTaskFailure = (error) => ({
  type: GET_TASKS_FAILURE,
  payload: error
});

const getTaskStarted = () => ({ type: GET_TASKS_STARTED });

export const redirectToggle = (status) => {
  return { type: REDIRECT_TOGGLE, payload: status };
};
