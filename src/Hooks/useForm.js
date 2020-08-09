import { useState, useEffect, useCallback } from 'react';

const VALUE = 'value';
const ERROR = 'error';
const REQUIRED_FIELD_ERROR = 'This is required field';

/**
 * Determines a value if it's an object.
 *
 * @param {object} value
 */
const isObject = (value) => {
  return typeof value === 'object' && value !== null;
};

/**
 *
 * @param {string} value
 * @param {boolean} isRequired
 */
const isRequired = (value, isRequired) => {
  if (!value && isRequired) {
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
const getPropValues = (initialValue, prop) => {
  return Object.keys(initialValue).reduce((accumulator, curr) => {
    accumulator[curr] = !prop ? false : initialValue[curr][prop] || null;

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
const useForm = (initialValue = {}, validation = {}, submitFormCallback) => {
  const [state, setStateValue] = useState(initialValue);

  const [values, setValues] = useState(getPropValues(state, VALUE));

  const [errors, setErrors] = useState(getPropValues(state, ERROR));

  const [dirty, setDirty] = useState(getPropValues(state));

  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  // Get a local copy of initialValue
  useEffect(() => {
    setStateValue(initialValue);
    setDisable(true); // Disable button in initial render.
    setInitialErrorState();
  }, []); // eslint-disable-line

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateErrorState());
    }
  }, [errors, isDirty]); // eslint-disable-line

  // Validate fields in forms
  const validateFormFields = useCallback(
    (name, value) => {
      const validator = validation;

      // Making sure that validation name is same in
      //
      if (!validator[name]) {
        return;
      }

      const field = validator[name];

      let error = '';

      error = isRequired(value, field.required);

      if (isObject(field['validator']) && error === '') {
        const fieldValidator = field['validator'];

        // Test the const callback =  if the value is meet the criteria
        const testFunc = fieldValidator['func'];

        if (!testFunc(value, values)) {
          error = fieldValidator['error'];
        }
      }

      return error;
    },
    [validation, values]
  );

  // Set Initial Error State
  // When hooks was first rendered...
  const setInitialErrorState = useCallback(() => {
    Object.keys(errors).map((name) =>
      setErrors((prevState) => ({
        ...prevState,
        [name]: validateFormFields(name, values[name])
      }))
    );
  }, [errors, values, validateFormFields]);

  // Used to disable submit button if there's a value in errors
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the const to =  avoid intensive memory leaked
  // in every re-render in component
  const validateErrorState = useCallback(() => Object.values(errors).some((error) => error), [errors]);

  // Event handler for handling changes in input.
  const handleOnChange = useCallback(
    (e) => {
      const { event } = e;

      setIsDirty(true);
      const name = event.target.name;
      const value = event.target.value;

      const error = validateFormFields(name, value);

      setValues((prevState) => ({ ...prevState, [name]: value }));
      setErrors((prevState) => ({ ...prevState, [name]: error }));
      setDirty((prevState) => ({ ...prevState, [name]: true }));
    },
    [validateFormFields]
  );

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();

      // Making sure that there's no error in the state
      // before calling the submit callback const
      if (!validateErrorState()) {
        submitFormCallback(values);
        // setInitialValues(initialValue);
      }
    },
    [validateErrorState, submitFormCallback, values]
  );

  const setInitialValues = (initialValue = initialValue) => {
    console.log('hello');
    console.log(values, getPropValues(initialValue, VALUE));
    setStateValue(initialValue);
    setValues(() => getPropValues(state, VALUE));
    setErrors(getPropValues(state, ERROR));
    console.log(values, getPropValues(initialValue, VALUE));
  };

  return {
    handleOnChange,
    handleOnSubmit,
    values,
    errors,
    disable,
    setValues,
    setErrors,
    dirty,
    setInitialValues
  };
};

export default useForm;
