"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _modalReducers = _interopRequireDefault(require("./modalReducers"));

var _redirectReducer = _interopRequireDefault(require("./redirectReducer"));

var _apiReducers = _interopRequireDefault(require("./apiReducers"));

var _todosReducer = _interopRequireDefault(require("./todosReducer"));

var _authReducer = _interopRequireDefault(require("./authReducer"));

var _errorReducer = _interopRequireDefault(require("./errorReducer"));

var _usersReducers = _interopRequireDefault(require("./usersReducers"));

var _projectsReducers = _interopRequireDefault(require("./projectsReducers"));

var _tasksReducers = _interopRequireDefault(require("./tasksReducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  modal: _modalReducers["default"],
  redirect: _redirectReducer["default"],
  // apiReducer: apiReducers,
  // todos: todosReducers,
  auth: _authReducer["default"],
  errors: _errorReducer["default"],
  users: _usersReducers["default"],
  projects: _projectsReducers["default"],
  tasks: _tasksReducers["default"]
});

exports["default"] = _default;