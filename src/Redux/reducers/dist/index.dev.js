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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  modal: _modalReducers["default"],
  redirect: _redirectReducer["default"],
  apiReducer: _apiReducers["default"],
  todos: _todosReducer["default"],
  auth: _authReducer["default"],
  errors: _errorReducer["default"],
  users: _usersReducers["default"]
});

exports["default"] = _default;