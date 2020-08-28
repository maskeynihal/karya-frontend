import { combineReducers } from 'redux';
import modalReducers from './modalReducers';
import redirectReducer from './redirectReducer';
import apiReducers from './apiReducers';
import todosReducers from './todosReducer';
import authReducers from './authReducer';
import errorReducers from './errorReducer';

export default combineReducers({
  modal: modalReducers,
  redirect: redirectReducer,
  apiReducer: apiReducers,
  todos: todosReducers,
  auth: authReducers,
  errors: errorReducers
});
