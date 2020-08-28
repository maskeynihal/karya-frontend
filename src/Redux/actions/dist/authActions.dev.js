"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.setUserLoading = exports.setCurrentUser = exports.loginUser = exports.registerUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _types = require("./types");

var _callApi = _interopRequireDefault(require("Services/callApi"));

var _api = require("Constants/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import setAuthToken from '../utils/setAuthToken';
// Register User
var registerUser = function registerUser(userData, history) {
  return function (dispatch) {
    _axios["default"].post('/api/users/register', userData).then(function (res) {
      return history.push('/login');
    }) // re-direct to login on successful register
    ["catch"](function (err) {
      return dispatch({
        type: _types.GET_ERRORS,
        payload: err.response.data
      });
    });
  };
}; // Login - get user token


exports.registerUser = registerUser;

var loginUser = function loginUser(userData) {
  return function _callee(dispatch) {
    var _ref, response, error, decoded;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(_api.LOGIN_URL);
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])(_api.LOGIN_URL, userData));

          case 4:
            _ref = _context.sent;
            response = _ref.response;
            error = _ref.error;
            localStorage.setItem('karyaToken', response.data.token);
            decoded = (0, _jwtDecode["default"])(response.data.token); // Set current user

            dispatch(setCurrentUser(decoded));
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

var setCurrentUser = function setCurrentUser(decoded) {
  return {
    type: _types.SET_CURRENT_USER,
    payload: decoded
  };
}; // User loading


exports.setCurrentUser = setCurrentUser;

var setUserLoading = function setUserLoading() {
  return {
    type: _types.USER_LOADING
  };
}; // Log user out


exports.setUserLoading = setUserLoading;

var logoutUser = function logoutUser() {
  return function (dispatch) {
    // Remove token from local storage
    localStorage.removeItem('karyaToken'); // Remove auth header for future requests
    // setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false

    dispatch(setCurrentUser({}));
  };
};

exports.logoutUser = logoutUser;