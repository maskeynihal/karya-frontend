import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'loadsh';
import { useForm } from 'Hooks';
import { createUserValidation } from 'Validators';
import { editUser } from 'Redux/actions/usersActions';
import { useHistory, Redirect } from 'react-router-dom';

import { showUser } from 'Redux/actions/usersActions';

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
function UserEdit(props) {
  const dispatch = useDispatch();
  const { id: userId } = props.match.params;
  const user = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    dispatch(showUser(userId));
  }, []);

  const INITIAL_VALUE = {
    name: { value: user.name || '', error: '' },
    email: { value: user.email || '', error: '' },
    password: { value: user.password || '', error: '' },
    roleId: { value: (!_.isEmpty(user.role) && user.role[0].id) || 4, error: '' }
  };

  const { errors: reduxError } = useSelector((state) => state.errors);
  const { redirect } = useSelector((state) => state.users);

  const onSubmitForm = (state) => {
    dispatch(editUser(user.id, values));
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable, setInitialFormValue } = useForm(
    INITIAL_VALUE,
    createUserValidation,
    onSubmitForm,
    false,
    true
  );

  useMemo(() => {
    setInitialFormValue({
      name: user.name,
      email: user.email,
      password: '',
      roleId: !_.isEmpty(user.role) && user.role[0].id
    });
  }, [user]);

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
            <select
              className="form-control"
              id="roleId"
              name="roleId"
              value={values.roleId}
              onChange={handleOnChange}
              defaultValue={values.roleId}
            >
              <option value="">Select User Role</option>
              <option value={2}>Project Manager</option>
              <option value={3}>Team Lead</option>
              <option value={4}>Engineer</option>
            </select>
            {errors.roleId && dirty.roleId && <p className="error">{errors.roleId}</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Edit User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserEdit;
