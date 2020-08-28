import { combineReducers } from 'redux';
import modalReducers from './modalReducers';
import redirectReducer from './redirectReducer';
import authReducers from './authReducer';
import errorReducers from './errorReducer';
import usersReducers from './usersReducers';
import projectsReducers from './projectsReducers';
import tasksReducers from './tasksReducers';

export default combineReducers({
  modal: modalReducers,
  redirect: redirectReducer,
  auth: authReducers,
  errors: errorReducers,
  users: usersReducers,
  projects: projectsReducers,
  tasks: tasksReducers
});
