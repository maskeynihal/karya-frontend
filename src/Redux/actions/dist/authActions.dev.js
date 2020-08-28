'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.logoutUser = exports.setUserLoading = exports.setCurrentUser = exports.loginUser = void 0;

const _axios = _interopRequireDefault(require('axios'));

const _jwtDecode = _interopRequireDefault(require('jwt-decode'));

const _types = require('./types');

const _callApi = _interopRequireDefault(require('Services/callApi'));

const _api = require('Constants/api');

const _actions = require('Redux/actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import setAuthToken from '../utils/setAuthToken';
// Register User
const loginUser = function loginUser(userData) {
  return function _callee(dispatch) {
    let _ref, response, error, decoded;

    return regeneratorRuntime.async(
      function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.prev = 0;
              _context.next = 3;

              return regeneratorRuntime.awrap((0, _callApi['default'])(_api.LOGIN_URL, userData));

            case 3:
              _ref = _context.sent;
              response = _ref.response;
              error = _ref.error;
              localStorage.setItem('karyaToken', response.data.token);
              decoded = (0, _jwtDecode['default'])(response.data.token); // Set current user

              dispatch(setCurrentUser(decoded));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);
              dispatch({
                type: _types.GET_ERRORS,
                payload: _context.t0.response || {}
              });

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      },
      null,
      null,
      [[0, 11]]
    );
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

const setUserLoading = function setUserLoading() {
  return {
    type: _types.USER_LOADING
  };
}; // Log user out

exports.setUserLoading = setUserLoading;

const logoutUser = function logoutUser() {
  return function (dispatch) {
    // Remove token from local storage
    localStorage.removeItem('karyaToken'); // Remove auth header for future requests
    // setAuthToken(false);

    dispatch(_actions.usersActions.setUserInitialState()); // Set current user to empty object {} which will set isAuthenticated to false

    dispatch(setCurrentUser({}));
  };
};

exports.logoutUser = logoutUser;
