import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
/**
 * HOC for authenticated route.
 *
 * @param {Object} props
 */
function AuthRoute({ Component, type, ...props }) {
  const { isAuthenticated } = useSelector((state) => state.apiReducer);

  if (!isAuthenticated) {
    if (type === 'guest') {
      return <Route {...props}></Route>;
    }
    if (type === 'authenticated') {
      return (
        <Redirect
          to={{
            pathname: '/login'
          }}
        ></Redirect>
      );
    }
  }

  if (isAuthenticated) {
    if (type === 'guest') {
      return <Redirect to={{ pathname: '/' }} />;
    }
    if (type === 'authenticated') {
      return <Route {...props}></Route>;
    }
  }

  return <Route {...props}></Route>;
}

AuthRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  Component: PropTypes.func,
  type: PropTypes.string
};

export default AuthRoute;
