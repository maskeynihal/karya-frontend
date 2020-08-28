import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'Hooks';
import { createUserValidation } from 'Validators';
import { createUser } from 'Redux/actions/usersActions';
import { useHistory, Redirect } from 'react-router-dom';

const INITIAL_VALUE = {
  name: { value: '', error: '' },
  roleId: { value: null, error: '' },
  email: { value: 'admin@karya.com', error: '' },
  password: { value: 'password', error: '' }
};

/**
 * Project Component.
 *
 * @param props
 */
function UsersCreate(props) {
  const dispatch = useDispatch();
  const { errors: reduxError } = useSelector((state) => state.errors);
  const { redirect } = useSelector((state) => state.users);

  // useMemo(() => {}, [redirect]);

  const onSubmitForm = (state) => {
    dispatch(createUser(values));
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable } = useForm(
    INITIAL_VALUE,
    createUserValidation,
    onSubmitForm
  );

  if (redirect) {
    return <Redirect to={{ pathname: '/users' }}></Redirect>;
  }

  return (
    <div className="card">
      <div className="card-header">Create User</div>
      <div className="card-body">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              name="name"
              value={values.name}
              onChange={handleOnChange}
            />
            {errors.name && dirty.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              name="email"
              value={values.email}
              onChange={handleOnChange}
            />
            {errors.email && dirty.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={values.password}
              onChange={handleOnChange}
            />
            {errors.password && dirty.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="roleId">Select User Role</label>
            <select className="form-control" id="roleId" name="roleId" value={values.roleId} onChange={handleOnChange}>
              <option value="">Select User Role</option>
              <option value={2}>Project Manager</option>
              <option value={3}>Team Lead</option>
              <option value={4}>Engineer</option>
            </select>
            {errors.roleId && dirty.roleId && <p className="error">{errors.roleId}</p>}
          </div>
          <button type="submit" className="btn btn-primary" disabled={disable}>
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UsersCreate;
