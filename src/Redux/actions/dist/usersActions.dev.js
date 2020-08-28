"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editUser = exports.showUser = exports.createUser = exports.getAllUsers = exports.EDIT_USER_SUCCESS = exports.SHOW_USER_SUCCESS = exports.CREATE_USER_SUCCESS = exports.CREATE_USER = exports.GET_ALL_USERS = exports.GET_USERS_STARTED = exports.GET_USERS_FAILURE = exports.GET_USERS_SUCCESS = void 0;

var _api = require("Constants/api");

var _callApi = _interopRequireDefault(require("Services/callApi"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
exports.GET_USERS_SUCCESS = GET_USERS_SUCCESS;
var GET_USERS_FAILURE = 'GET_USERS_FAILURE';
exports.GET_USERS_FAILURE = GET_USERS_FAILURE;
var GET_USERS_STARTED = 'GET_USERS_STARTED';
exports.GET_USERS_STARTED = GET_USERS_STARTED;
var GET_ALL_USERS = 'GET_ALL_USERS';
exports.GET_ALL_USERS = GET_ALL_USERS;
var CREATE_USER = 'CREATE_USER';
exports.CREATE_USER = CREATE_USER;
var CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
exports.CREATE_USER_SUCCESS = CREATE_USER_SUCCESS;
var SHOW_USER_SUCCESS = 'SHOW_USER_SUCCESS';
exports.SHOW_USER_SUCCESS = SHOW_USER_SUCCESS;
var EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
exports.EDIT_USER_SUCCESS = EDIT_USER_SUCCESS;

var getAllUsers = function getAllUsers(users) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(getUserStarted());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])(_api.GET_ALL_USERS_URL, {}));

          case 4:
            data = _context.sent;
            dispatch(getUserSuccess(data));
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch(getUserFailure(_context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.getAllUsers = getAllUsers;

var createUser = function createUser(user) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch(getUserStarted());
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])(_api.CREATE_USER_URL, {
              name: user.name,
              password: user.password,
              email: user.email,
              role_id: parseInt(user.roleId)
            }));

          case 4:
            data = _context2.sent;
            dispatch(createUserSuccess(data));
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            dispatch(getUserFailure(_context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.createUser = createUser;

var showUser = function showUser(userId) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(getUserStarted());
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])({
              url: "/users/".concat(userId),
              method: 'GET'
            }));

          case 4:
            data = _context3.sent;
            dispatch(showUserSuccess(data));
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            dispatch(getUserFailure(_context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.showUser = showUser;

var editUser = function editUser(userId, user) {
  return function _callee4(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch(getUserStarted());
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])({
              url: "/users/".concat(userId),
              method: 'PUT'
            }, {
              name: user.name,
              password: user.password,
              email: user.email,
              role_id: parseInt(user.roleId)
            }));

          case 4:
            data = _context4.sent;
            dispatch(editUserSuccess(data));
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            dispatch(getUserFailure(_context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.editUser = editUser;

var showUserSuccess = function showUserSuccess(user) {
  return {
    type: SHOW_USER_SUCCESS,
    payload: user
  };
};

var createUserSuccess = function createUserSuccess(user) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user
  };
};

var editUserSuccess = function editUserSuccess(user) {
  return {
    type: EDIT_USER_SUCCESS,
    payload: user
  };
};

var getUserSuccess = function getUserSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    payload: users
  };
};

var getUserFailure = function getUserFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    payload: error
  };
};

var getUserStarted = function getUserStarted() {
  return {
    type: GET_USERS_STARTED
  };
};