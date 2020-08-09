import { combineReducers } from 'redux';
import modalReducers from './modalReducers';
import redirectReducer from './redirectReducer';
import apiReducers from './apiReducers';
import todosReducers from './todosReducer';

export default combineReducers({
  modal: modalReducers,
  redirect: redirectReducer,
  apiReducer: apiReducers,
  todos: todosReducers
});
