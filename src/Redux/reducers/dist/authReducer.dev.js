"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("Redux/actions/types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  isAuthenticated: !!localStorage.getItem('karyaToken'),
  authToken: localStorage.getItem('karyaToken') || '',
  user: {},
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

  switch (type) {
    case _types.SET_CURRENT_USER:
      return _objectSpread({}, state, {
        isAuthenticated: !!Object.keys(payload).length,
        user: payload
      });

    case _types.USER_LOADING:
      return _objectSpread({}, state, {
        isLoading: true
      });

    default:
      return state;
  }
};

exports["default"] = _default;