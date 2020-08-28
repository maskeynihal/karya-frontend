"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("Redux/reducers"));

var _appMiddleware = _interopRequireDefault(require("./middleware/appMiddleware"));

var _apiMiddleware = _interopRequireDefault(require("./middleware/apiMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_appMiddleware["default"], _apiMiddleware["default"], _reduxThunk["default"])(_redux.createStore);
var store = createStoreWithMiddleware(_reducers["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var _default = store;
exports["default"] = _default;