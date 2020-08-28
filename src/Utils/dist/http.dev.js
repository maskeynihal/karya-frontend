"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("Constants/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var http = _axios["default"].create({
  baseURL: _config["default"].baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: window.localStorage.getItem('karyaToken')
  }
});

var _default = http;
exports["default"] = _default;