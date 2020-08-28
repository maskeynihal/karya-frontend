"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editProject = exports.showProject = exports.createProject = exports.getAllProjects = exports.EDIT_PROJECT_SUCCESS = exports.SHOW_PROJECT_SUCCESS = exports.CREATE_PROJECT_SUCCESS = exports.CREATE_PROJECT = exports.GET_ALL_PROJECTS = exports.GET_PROJECTS_STARTED = exports.GET_PROJECTS_FAILURE = exports.GET_PROJECTS_SUCCESS = void 0;

var _api = require("Constants/api");

var _callApi = _interopRequireDefault(require("Services/callApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
exports.GET_PROJECTS_SUCCESS = GET_PROJECTS_SUCCESS;
var GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';
exports.GET_PROJECTS_FAILURE = GET_PROJECTS_FAILURE;
var GET_PROJECTS_STARTED = 'GET_PROJECTS_STARTED';
exports.GET_PROJECTS_STARTED = GET_PROJECTS_STARTED;
var GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
exports.GET_ALL_PROJECTS = GET_ALL_PROJECTS;
var CREATE_PROJECT = 'CREATE_PROJECT';
exports.CREATE_PROJECT = CREATE_PROJECT;
var CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
exports.CREATE_PROJECT_SUCCESS = CREATE_PROJECT_SUCCESS;
var SHOW_PROJECT_SUCCESS = 'SHOW_PROJECT_SUCCESS';
exports.SHOW_PROJECT_SUCCESS = SHOW_PROJECT_SUCCESS;
var EDIT_PROJECT_SUCCESS = 'EDIT_PROJECT_SUCCESS';
exports.EDIT_PROJECT_SUCCESS = EDIT_PROJECT_SUCCESS;

var getAllProjects = function getAllProjects(projects) {
  return function _callee(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(getProjectStarted());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])(_api.GET_ALL_PROJECTS_URL, {}));

          case 4:
            data = _context.sent;
            dispatch(getProjectSuccess(data));
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch(getProjectFailure(_context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.getAllProjects = getAllProjects;

var createProject = function createProject(project) {
  return function _callee2(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch(getProjectStarted());
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])(_api.CREATE_PROJECT_URL, {
              name: project.name,
              description: project.description,
              project_manager_id: parseInt(project.projectManager)
            }));

          case 4:
            data = _context2.sent;
            dispatch(createProjectSuccess(data));
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            dispatch(getProjectFailure(_context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.createProject = createProject;

var showProject = function showProject(projectId) {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(getProjectStarted());
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])({
              url: "/projects/".concat(projectId),
              method: 'GET'
            }));

          case 4:
            data = _context3.sent;
            dispatch(showProjectSuccess(data));
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            dispatch(getProjectFailure(_context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.showProject = showProject;

var editProject = function editProject(projectId, project) {
  return function _callee4(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch(getProjectStarted());
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap((0, _callApi["default"])({
              url: "/projects/".concat(projectId),
              method: 'PUT'
            }, {
              name: project.name,
              description: project.description,
              project_manager_id: parseInt(project.projectManager)
            }));

          case 4:
            data = _context4.sent;
            dispatch(editProjectSuccess(data));
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            dispatch(getProjectFailure(_context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.editProject = editProject;

var showProjectSuccess = function showProjectSuccess(project) {
  return {
    type: SHOW_PROJECT_SUCCESS,
    payload: project
  };
};

var createProjectSuccess = function createProjectSuccess(project) {
  return {
    type: CREATE_PROJECT_SUCCESS,
    payload: project
  };
};

var editProjectSuccess = function editProjectSuccess(project) {
  return {
    type: EDIT_PROJECT_SUCCESS,
    payload: project
  };
};

var getProjectSuccess = function getProjectSuccess(projects) {
  return {
    type: GET_PROJECTS_SUCCESS,
    payload: projects
  };
};

var getProjectFailure = function getProjectFailure(error) {
  return {
    type: GET_PROJECTS_FAILURE,
    payload: error
  };
};

var getProjectStarted = function getProjectStarted() {
  return {
    type: GET_PROJECTS_STARTED
  };
};