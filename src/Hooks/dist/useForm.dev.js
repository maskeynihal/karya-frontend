"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VALUE = 'value';
var ERROR = 'error';
var REQUIRED_FIELD_ERROR = 'This is required field';
/**
 * Determines a value if it's an object.
 *
 * @param {object} value
 */

var isObject = function isObject(value) {
  return _typeof(value) === 'object' && value !== null;
};
/**
 *
 * @param {string} value
 * @param {boolean} isRequired
 */


var isRequired = function isRequired(value, _isRequired) {
  if (!value && _isRequired) {
    return REQUIRED_FIELD_ERROR;
  }

  return '';
};
/**
 * Get prop values.
 *
 * @param initialValue
 * @param prop
 */


var getPropValues = function getPropValues(initialValue, prop) {
  return Object.keys(initialValue).reduce(function (accumulator, curr) {
    accumulator[curr] = !prop ? false : initialValue[curr][prop] || '';
    return accumulator;
  }, {});
};
/**
 * Custom hooks to validate your Form...
 *
 * @param {object} initialValue Model you initialValue.
 * @param {object} validation Model your validation.
 * @param {Function} submitFormCallback
 */


var useForm = function useForm() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var validation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var submitFormCallback = arguments.length > 2 ? arguments[2] : undefined;

  var _useState = (0, _react.useState)(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setStateValue = _useState2[1];

  var _useState3 = (0, _react.useState)(getPropValues(state, VALUE)),
      _useState4 = _slicedToArray(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

  var _useState5 = (0, _react.useState)(getPropValues(state, ERROR)),
      _useState6 = _slicedToArray(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var _useState7 = (0, _react.useState)(getPropValues(state)),
      _useState8 = _slicedToArray(_useState7, 2),
      dirty = _useState8[0],
      setDirty = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      disable = _useState10[0],
      setDisable = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isDirty = _useState12[0],
      setIsDirty = _useState12[1]; // Get a local copy of initialValue


  (0, _react.useEffect)(function () {
    setStateValue(initialValue);
    setDisable(true); // Disable button in initial render.

    setInitialErrorState();
  }, []); // eslint-disable-line
  // For every changed in our state this will be fired
  // To be able to disable the button

  (0, _react.useEffect)(function () {
    if (isDirty) {
      setDisable(validateErrorState());
    }
  }, [errors, isDirty]); // eslint-disable-line
  // Validate fields in forms

  var validateFormFields = (0, _react.useCallback)(function (name, value) {
    var validator = validation; // Making sure that validation name is same in
    //

    if (!validator[name]) {
      return;
    }

    var field = validator[name];
    var error = '';
    error = isRequired(value, field.required);

    if (isObject(field['validator']) && error === '') {
      var fieldValidator = field['validator']; // Test the const callback =  if the value is meet the criteria

      var testFunc = fieldValidator['func'];

      if (!testFunc(value, values)) {
        error = fieldValidator['error'];
      }
    }

    return error;
  }, [validation, values]); // Set Initial Error State
  // When hooks was first rendered...

  var setInitialErrorState = (0, _react.useCallback)(function () {
    Object.keys(errors).map(function (name) {
      return setErrors(function (prevState) {
        return _objectSpread({}, prevState, _defineProperty({}, name, validateFormFields(name, values[name])));
      });
    });
  }, [errors, values, validateFormFields]); // Used to disable submit button if there's a value in errors
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the const to =  avoid intensive memory leaked
  // in every re-render in component

  var validateErrorState = (0, _react.useCallback)(function () {
    return Object.values(errors).some(function (error) {
      return error;
    });
  }, [errors]); // Event handler for handling changes in input.

  var handleOnChange = (0, _react.useCallback)(function (event) {
    setIsDirty(true);
    var name = event.target.name;
    var value = event.target.value;
    var error = validateFormFields(name, value);
    setValues(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, name, value));
    });
    setErrors(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, name, error));
    });
    setDirty(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, name, true));
    });
  }, [validateFormFields]);
  var handleOnSubmit = (0, _react.useCallback)(function (event) {
    event.preventDefault(); // Making sure that there's no error in the state
    // before calling the submit callback const

    if (!validateErrorState()) {
      submitFormCallback(values); // setInitialValues(initialValue);
    }
  }, [validateErrorState, submitFormCallback, values]);

  var setInitialValues = function setInitialValues() {
    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialValue;
    console.log('hello');
    console.log(values, getPropValues(initialValue, VALUE));
    setStateValue(initialValue);
    setValues(function () {
      return getPropValues(state, VALUE);
    });
    setErrors(getPropValues(state, ERROR));
    console.log(values, getPropValues(initialValue, VALUE));
  };

  return {
    handleOnChange: handleOnChange,
    handleOnSubmit: handleOnSubmit,
    values: values,
    errors: errors,
    disable: disable,
    setValues: setValues,
    setErrors: setErrors,
    dirty: dirty,
    setInitialValues: setInitialValues
  };
};

var _default = useForm;
exports["default"] = _default;