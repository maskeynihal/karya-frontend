import { GET_ALL_USERS_URL, CREATE_USER_URL } from 'Constants/api';
import callApi from 'Services/callApi';

import { browser } from 'react-router-dom';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const GET_USERS_STARTED = 'GET_USERS_STARTED';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const SHOW_USER_SUCCESS = 'SHOW_USER_SUCCESS';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const USERS_INITIAL_STATE = 'USERS_INITIAL_STATE';

export const getAllUsers = (users) => async (dispatch) => {
  dispatch(getUserStarted());
  try {
    const data = await callApi(GET_ALL_USERS_URL, {});

    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

export const createUser = (user) => async (dispatch) => {
  dispatch(getUserStarted());
  try {
    const data = await callApi(CREATE_USER_URL, {
      name: user.name,
      password: user.password,
      email: user.email,
      role_id: parseInt(user.roleId)
    });

    dispatch(createUserSuccess(data));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

export const showUser = (userId) => async (dispatch) => {
  dispatch(getUserStarted());
  try {
    const data = await callApi({
      url: `/users/${userId}`,
      method: 'GET'
    });

    dispatch(showUserSuccess(data));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

export const editUser = (userId, user) => async (dispatch) => {
  dispatch(getUserStarted());
  try {
    const data = await callApi(
      {
        url: `/users/${userId}`,
        method: 'PUT'
      },
      {
        name: user.name,
        password: user.password,
        email: user.email,
        role_id: parseInt(user.roleId)
      }
    );

    dispatch(editUserSuccess(data));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

const showUserSuccess = (user) => {
  return { type: SHOW_USER_SUCCESS, payload: user };
};

const createUserSuccess = (user) => {
  return { type: CREATE_USER_SUCCESS, payload: user };
};

const editUserSuccess = (user) => {
  return { type: EDIT_USER_SUCCESS, payload: user };
};

const getUserSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users
});

const getUserFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error
});

const getUserStarted = () => ({ type: GET_USERS_STARTED });

export const setUserInitialState = () => ({ type: USERS_INITIAL_STATE });
