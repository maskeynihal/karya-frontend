"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("Redux/actions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  isLoading: false,
  redirect: false,
  tasks: [],
  currentTask: {}
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions.tasksActions.GET_TASKS_STARTED:
      return _objectSpread({}, state, {
        isLoading: true
      });

    case _actions.tasksActions.GET_TASKS_SUCCESS:
      return _objectSpread({}, state, {
        redirect: false,
        isLoading: false,
        tasks: _toConsumableArray(payload.response.data)
      });

    case _actions.tasksActions.CREATE_TASK_SUCCESS:
      return _objectSpread({}, state, {
        redirect: true,
        isLoading: false,
        tasks: [].concat(_toConsumableArray(state.tasks), [payload.response.data])
      });

    case _actions.tasksActions.SHOW_TASK_SUCCESS:
      return _objectSpread({}, state, {
        currentTask: payload.response.data
      });

    case _actions.tasksActions.GET_TASKS_FAILURE:
      return _objectSpread({}, state, {
        isLoading: false,
        tasks: [],
        error: payload.error
      });

    case _actions.tasksActions.EDIT_TASK_SUCCESS:
      return _objectSpread({}, state, {
        isLoading: false,
        redirect: true,
        tasks: state.tasks.map(function (user) {
          if (user.id === payload.response.data.id) {
            user = payload.response.data;
          }

          return user;
        })
      });

    case _actions.tasksActions.REDIRECT_TOGGLE:
      return _objectSpread({}, state, {
        redirect: payload
      });

    default:
      return state;
  }
};

exports["default"] = _default;