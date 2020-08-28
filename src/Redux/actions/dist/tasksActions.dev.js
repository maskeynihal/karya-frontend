"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirectToggle = exports.editTask = exports.showTask = exports.createTask = exports.getAllTasks = exports.REDIRECT_TOGGLE = exports.EDIT_TASK_SUCCESS = exports.SHOW_TASK_SUCCESS = exports.CREATE_TASK_SUCCESS = exports.CREATE_TASK = exports.GET_ALL_TASKS = exports.GET_TASKS_STARTED = exports.GET_TASKS_FAILURE = exports.GET_TASKS_SUCCESS = void 0;

var _api = require("Constants/api");

var _callApi = _interopRequireDefault(require("Services/callApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
exports.GET_TASKS_SUCCESS = GET_TASKS_SUCCESS;
var GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';
exports.GET_TASKS_FAILURE = GET_TASKS_FAILURE;
var GET_TASKS_STARTED = 'GET_TASKS_STARTED';
exports.GET_TASKS_STARTED = GET_TASKS_STARTED;
var GET_ALL_TASKS = 'GET_ALL_TASKS';
exports.GET_ALL_TASKS = GET_ALL_TASKS;
var CREATE_TASK = 'CREATE_TASK';
exports.CREATE_TASK = CREATE_TASK;
var CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
exports.CREATE_TASK_SUCCESS = CREATE_TASK_SUCCESS;
var SHOW_TASK_SUCCESS = 'SHOW_TASK_SUCCESS';
exports.SHOW_TASK_SUCCESS = SHOW_TASK_SUCCESS;
var EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
exports.EDIT_TASK_SUCCESS = EDIT_TASK_SUCCESS;
var REDIRECT_TOGGLE = 'REDIRECT_TOGGLE';
exports.REDIRECT_TOGGLE = REDIRECT_TOGGLE;

var getAllTasks = function getAllTasks(tasks) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(getTaskStarted());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])(_api.GET_ALL_TASKS_URL, {}));

          case 4:
            data = _context.sent;
            dispatch(getTaskSuccess(data));
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch(getTaskFailure(_context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.getAllTasks = getAllTasks;

var createTask = function createTask(task) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch(getTaskStarted());
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])(_api.CREATE_TASK_URL, {
              title: task.title,
              description: task.description,
              assignee_id: parseInt(task.assigneeId),
              deadline: task.deadline,
              project_id: task.projectId
            }));

          case 4:
            data = _context2.sent;
            dispatch(createTaskSuccess(data));
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            dispatch(getTaskFailure(_context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.createTask = createTask;

var showTask = function showTask(taskId) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(getTaskStarted());
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])({
              url: "/tasks/".concat(taskId),
              method: 'GET'
            }));

          case 4:
            data = _context3.sent;
            dispatch(showTaskSuccess(data));
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            dispatch(getTaskFailure(_context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.showTask = showTask;

var editTask = function editTask(taskId, task) {
  return function _callee4(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch(getTaskStarted());
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])({
              url: "/tasks/".concat(taskId),
              method: 'PUT'
            }, {
              title: task.title,
              description: task.description,
              assignee_id: parseInt(task.assigneeId),
              deadline: task.deadline,
              project_id: task.projectId
            }));

          case 4:
            data = _context4.sent;
            dispatch(editTaskSuccess(data));
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            dispatch(getTaskFailure(_context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.editTask = editTask;

var showTaskSuccess = function showTaskSuccess(task) {
  return {
    type: SHOW_TASK_SUCCESS,
    payload: task
  };
};

var createTaskSuccess = function createTaskSuccess(task) {
  return {
    type: CREATE_TASK_SUCCESS,
    payload: task
  };
};

var editTaskSuccess = function editTaskSuccess(task) {
  return {
    type: EDIT_TASK_SUCCESS,
    payload: task
  };
};

var getTaskSuccess = function getTaskSuccess(tasks) {
  return {
    type: GET_TASKS_SUCCESS,
    payload: tasks
  };
};

var getTaskFailure = function getTaskFailure(error) {
  return {
    type: GET_TASKS_FAILURE,
    payload: error
  };
};

var getTaskStarted = function getTaskStarted() {
  return {
    type: GET_TASKS_STARTED
  };
};

var redirectToggle = function redirectToggle(status) {
  return {
    type: REDIRECT_TOGGLE,
    payload: status
  };
};

exports.redirectToggle = redirectToggle;