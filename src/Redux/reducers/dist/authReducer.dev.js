"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("Redux/actions/types");

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authToken = localStorage.getItem('karyaToken');
var INITIAL_STATE = {
  isAuthenticated: !!authToken,
  authToken: authToken || '',
  user: authToken ? (0, _jwtDecode["default"])(authToken) : {},
  isLoading: false,
  hasError: false,
  errors: {}
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      _action$payload = action.payload,
      payload = _action$payload === void 0 ? {} : _action$payload;
  console.log(payload);

  switch (type) {
    case _types.SET_CURRENT_USER:
      return _objectSpread({}, state, {
        isAuthenticated: !!payload.token,
        user: payload.user,
        authToken: payload.token
      });

    case _types.USER_LOADING:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _types.SET_AUTH_INITIAL:
      return _objectSpread({}, INITIAL_STATE, {
        authToken: ''
      });

    default:
      return state;
  }
};

exports["default"] = _default;