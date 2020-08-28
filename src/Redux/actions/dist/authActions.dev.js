"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.setUserLoading = exports.setCurrentUser = exports.loginUser = void 0;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _types = require("./types");

var _callApi = _interopRequireDefault(require("Services/callApi"));

var _api = require("Constants/api");

var _actions = require("Redux/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Register User
var loginUser = function loginUser(userData) {
  return function _callee(dispatch) {
    var _ref, response, user;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _callApi["default"])(_api.LOGIN_URL, userData));

          case 3:
            _ref = _context.sent;
            response = _ref.response;
            localStorage.setItem('karyaToken', response.data.token);
            _context.next = 8;
            return regeneratorRuntime.awrap((0, _jwtDecode["default"])(response.data.token));

          case 8:
            user = _context.sent;
            // Set current user
            dispatch(setCurrentUser({
              user: user,
              token: response.data.token
            }));
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _types.GET_ERRORS,
              payload: _context.t0.response || {}
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
}; // Set logged in user


exports.loginUser = loginUser;

var setCurrentUser = function setCurrentUser(user) {
  return {
    type: _types.SET_CURRENT_USER,
    payload: user
  };
}; // User loading


exports.setCurrentUser = setCurrentUser;

var setUserLoading = function setUserLoading() {
  return {
    type: _types.USER_LOADING
  };
};

exports.setUserLoading = setUserLoading;

var setAuthInitial = function setAuthInitial() {
  return {
    type: _types.SET_AUTH_INITIAL
  };
}; // Log user out


var logoutUser = function logoutUser() {
  return function (dispatch) {
    // Remove token from local storage
    localStorage.removeItem('karyaToken'); // Remove auth header for future requests

    dispatch(_actions.usersActions.setUserInitialState());
    dispatch(setAuthInitial()); // Set current user to empty object {} which will set isAuthenticated to false

    dispatch(setCurrentUser({
      user: {},
      token: ''
    }));
  };
};

exports.logoutUser = logoutUser;