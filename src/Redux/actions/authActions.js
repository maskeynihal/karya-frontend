import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'; // Register User
import callApi from 'Services/callApi';
import { LOGIN_URL } from 'Constants/api';
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then((res) => history.push('/login')) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; // Login - get user token
export const loginUser = (userData) => async (dispatch) => {
  try {
    console.log(LOGIN_URL);
    const { response, error } = await callApi(LOGIN_URL, userData);

    console.log('RESPONSE', response);
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
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
