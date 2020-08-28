"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require("Utils/http"));

var _api = require("Constants/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _callee = function _callee(_ref) {
  var email, password, _ref2, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = _ref.email, password = _ref.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_http["default"].post(_api.LOGIN_URL, {
            email: email,
            password: password
          }));

        case 4:
          _ref2 = _context.sent;
          data = _ref2.data;
          return _context.abrupt("return", {
            response: data,
            error: false
          });

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);

          if (_context.t0.response) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", {
            response: {
              message: 'Network Error'
            },
            error: true
          });

        case 13:
          return _context.abrupt("return", {
            response: _context.t0.response.data,
            error: true
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports["default"] = _callee;