import React, { useEffect } from 'react';
import { Card as NeuCard, TextField, Button, Alert } from 'ui-neumorphism';
import { Link, useHistory } from 'react-router-dom';

import { useFormInput, useAlert, useForm } from 'Hooks';

import { GoAlert } from 'react-icons/go';

import { registerFormValidation } from 'Validators';
import register from 'Services/registerApi';

/**
 * Register Card input.
 */
function RegisterCard() {
  const { alert, handleAlert } = useAlert({});
  const history = useHistory();
  const initialValue = {
    name: { value: 'Nihal Maskey', error: '' },
    email: { value: 'maskeynihal@gmail.com', error: '' },
    password: { value: 'password', error: '' }
  };

  const validation = registerFormValidation;
  const onSubmitForm = async (state) => {
    // user registration
    const data = await register(state);

    if (data.error) {
      handleAlert({ ...data.response, type: 'error' });
    } else {
      handleAlert({ message: 'Thank you for registering. Redirecting to Sign in page', type: 'success' });
      setTimeout(() => {
        history.push('/');
      }, 1000);
    }

    setInitialValues(initialValue);
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable, setInitialValues } = useForm(
    initialValue,
    validation,
    onSubmitForm
  );

  return (
    <form onSubmit={handleOnSubmit}>
      <NeuCard className="register-card">
        <div className="container">
          <div className="register-card__heading"> {'REGISTER'}</div>
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
                prepend="Name"
                name="name"
                value={values.name}
                placeholder="Enter your name"
                className="input-field"
                onChange={handleOnChange}
              ></TextField>
              {errors.name && dirty.name && <p className="error">{errors.name}</p>}
            </div>
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
              <Button className="register-card__button" htmlType="submit" disabled={disable}>
                Register
              </Button>
            </div>
          </div>
          <div className="register-card__footer">
            Have account?{' '}
            <Link to="/login">
              <Button className="submit" text color="var(--primary)" rounded>
                {' '}
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </NeuCard>
    </form>
  );
}

export default RegisterCard;
