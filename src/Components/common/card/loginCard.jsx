import React from 'react';
import { Card as NeuCard, TextField, Button, Alert } from 'ui-neumorphism';
import { Link, Redirect } from 'react-router-dom';

import { useAlert, useForm } from 'Hooks';

import { GoAlert } from 'react-icons/go';

import { loginFormValidation } from 'Validators';
import login from 'Services/loginApi';
import { useDispatch, useSelector } from 'react-redux';
import { apiActions, authActions } from 'Redux/actions';
import { useEffect } from 'react';

const INITIAL_VALUE = {
  email: { value: 'maskeynihal@gmail.com', error: '' },
  password: { value: 'password', error: '' }
};

/**
 * Login Card input.
 *
 * @param {Object} initialValue
 * @param validation
 */
function LoginCard(initialValue = INITIAL_VALUE, validation = loginFormValidation) {
  const { isAuthenticated, hasError, errors: apiErrors } = useSelector((state) => state.apiReducer);

  const { alert, handleAlert } = useAlert({});
  const dispatch = useDispatch();

  const login = (state) => {
    dispatch(authActions.login(state));
  };
  const onSubmitForm = (state) => {
    // user login
    const data = login(state);

    console.log(hasError);
    // if (data.error) {
    //   handleAlert({ ...data.response, type: 'error' });
    // }
  };

  useEffect(() => {
    console.log('Hello', alert);
    if (apiErrors.message) {
      handleAlert({ ...apiErrors, type: 'error' });
    }
  }, ['hasError']);
  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable, setInitialValues } = useForm(
    initialValue,
    validation,
    onSubmitForm
  );

  // redirect after authentication, refactor required
  if (isAuthenticated) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <NeuCard className="register-card">
        <div className="container">
          <div className="register-card__heading"> {'Login'}</div>
          {alert.message && (
            <div className="alert">
              <Alert type={alert.type} icon={<GoAlert />}>
                {alert.message}
              </Alert>
            </div>
          )}
          <div className="register-card__input">
            <div className="input-row">
              <TextField
                prepend="Email"
                name="email"
                placeholder="Enter your email"
                className="input-field"
                value={values.email}
                onChange={handleOnChange}
              ></TextField>
              {errors.email && dirty.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-row">
              <TextField
                prepend="Password"
                placeholder="Enter password"
                type="password"
                value={values.password}
                className="input-field"
                name="password"
                onChange={handleOnChange}
              ></TextField>
              {errors.password && dirty.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="input-row">
              <Button className="register-card__button" htmlType="submit">
                Login
              </Button>
            </div>
          </div>
          <div className="register-card__footer">
            {"Don'tHave account? "}
            <Link to="/register">
              <Button className="submit" text color="var(--primary)" rounded>
                {' '}
                Register
              </Button>
            </Link>
          </div>
        </div>
      </NeuCard>
    </form>
  );
}

export default LoginCard;
