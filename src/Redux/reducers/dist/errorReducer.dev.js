"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _types = require("../actions/types");

var INITIAL_STATE = {};
/**
 * Error Reducer.
 *
 * @param state
 * @param action
 */

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
}