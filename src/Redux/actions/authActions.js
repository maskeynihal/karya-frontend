import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, SET_AUTH_INITIAL } from './types'; // Register User
import callApi from 'Services/callApi';
import { LOGIN_URL } from 'Constants/api';
import { usersActions } from 'Redux/actions';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { response, error } = await callApi(LOGIN_URL, userData);

    console.log(response.data.token);
    localStorage.setItem('karyaToken', response.data.token);
    const user = await jwtDecode(response.data.token);

    // Set current user
    dispatch(setCurrentUser({ user, token: response.data.token }));
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response || {}
    });
  }
}; // Set logged in user
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
}; // User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

const setAuthInitial = () => {
  return { type: SET_AUTH_INITIAL };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('karyaToken');
  // Remove auth header for future requests
  dispatch(usersActions.setUserInitialState());
  dispatch(setAuthInitial());
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({ user: {}, token: '' }));
};
