"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Tasks", {
  enumerable: true,
  get: function get() {
    return _all["default"];
  }
});
Object.defineProperty(exports, "TasksCreate", {
  enumerable: true,
  get: function get() {
    return _create["default"];
  }
});
Object.defineProperty(exports, "TasksEdit", {
  enumerable: true,
  get: function get() {
    return _edit["default"];
  }
});
Object.defineProperty(exports, "TasksShow", {
  enumerable: true,
  get: function get() {
    return _show["default"];
  }
});

var _all = _interopRequireDefault(require("./all"));

var _create = _interopRequireDefault(require("./create"));

var _edit = _interopRequireDefault(require("./edit"));

var _show = _interopRequireDefault(require("./show"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }