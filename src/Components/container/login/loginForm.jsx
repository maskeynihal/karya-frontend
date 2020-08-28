import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { loginUser } from 'Redux/actions/authActions';
import { useForm } from 'Hooks';
import { loginFormValidation } from 'Validators';

const INITIAL_VALUE = {
  email: { value: 'admin@karya.com', error: '' },
  password: { value: 'password', error: '' }
};

/**
 * Login Form.
 *
 * @param initialValue
 * @param props
 * @param validation
 */
function Login(props) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { errors: reduxError } = useSelector((state) => state.errors);
  const onSubmitForm = (state) => {
    console.log(values, errors);
    dispatch(loginUser(values));
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable } = useForm(
    INITIAL_VALUE,
    loginFormValidation,
    onSubmitForm
  );

  return (
    <div className="login">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleOnChange}
            isInvalid={dirty.email && errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleOnChange}
            isInvalid={dirty.password && errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(Login);
