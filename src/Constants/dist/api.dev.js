"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CREATE_PROJECT_URL = exports.GET_ALL_PROJECTS_URL = exports.CREATE_USER_URL = exports.GET_ALL_USERS_URL = exports.GET_TODOS_URL = exports.ADD_TODO_URL = exports.LOGIN_URL = exports.REGISTER_URL = void 0;
var REGISTER_URL = 'auth/register/';
exports.REGISTER_URL = REGISTER_URL;
var LOGIN_URL = {
  url: 'auth/login',
  method: 'POST'
};
exports.LOGIN_URL = LOGIN_URL;
var ADD_TODO_URL = {
  url: '/todo',
  method: 'POST'
};
exports.ADD_TODO_URL = ADD_TODO_URL;
var GET_TODOS_URL = {
  url: '/todo',
  method: 'GET'
};
exports.GET_TODOS_URL = GET_TODOS_URL;
var GET_ALL_USERS_URL = {
  url: '/users',
  method: 'GET'
};
exports.GET_ALL_USERS_URL = GET_ALL_USERS_URL;
var CREATE_USER_URL = {
  url: '/users',
  method: 'POST'
};
exports.CREATE_USER_URL = CREATE_USER_URL;
var GET_ALL_PROJECTS_URL = {
  url: '/projects',
  method: 'GET'
};
exports.GET_ALL_PROJECTS_URL = GET_ALL_PROJECTS_URL;
var CREATE_PROJECT_URL = {
  url: '/projects',
  method: 'POST'
};
exports.CREATE_PROJECT_URL = CREATE_PROJECT_URL;