import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'; // Register User
import callApi from 'Services/callApi';
import { LOGIN_URL } from 'Constants/api';
import { usersActions } from 'Redux/actions';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { response, error } = await callApi(LOGIN_URL, userData);

    localStorage.setItem('karyaToken', response.data.token);
    const decoded = jwtDecode(response.data.token);

    // Set current user
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response || {}
    });
  }
}; // Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
}; // User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
}; // Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('karyaToken');
  // Remove auth header for future requests
  // setAuthToken(false);
  dispatch(usersActions.setUserInitialState());
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
