"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("Redux/actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isAuthenticated: !!localStorage.getItem('karyaToken'),
    authToken: localStorage.getItem('karyaToken') || '',
    isLoading: false,
    hasError: false,
    errors: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.apiActions.API_SUCCESS:
      if (action.payload.token) {
        localStorage.setItem('karyaToken', action.payload.token);
      }

      return _objectSpread({}, state, {
        isAuthenticated: true,
        hasError: false,
        errors: {},
        authToken: action.payload.token
      });

    case _actions.apiActions.API_ERROR:
      return _objectSpread({}, state, {
        hasError: true,
        errors: action.payload
      });

    case _actions.authActions.LOGOUT:
      localStorage.setItem('karyaToken', '');
      return _objectSpread({}, state, {
        isAuthenticated: false,
        authToken: ''
      });

    default:
      return state;
  }
};

exports["default"] = _default;