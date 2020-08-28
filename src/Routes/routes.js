import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'Views/pages/home';
import RegisterPage from 'Views/pages/register';
import LoginPage from 'Views/pages/login';
import AuthRoute from 'Components/hoc/authRoute';
import DefaultLayout from 'Views/layouts/default';
import Dashboard from 'Views/pages/dashboard';
/**
 * Make Routes.
 * Routes passed must be the most outside route or those that don't have parent.
 *
 * @param props
 */
function Routes(props) {
  return (
    <Switch>
      <AuthRoute type="guest" path="/login" component={LoginPage} exact></AuthRoute>
      <DefaultLayout>
        <AuthRoute type="authenticated" path="/" component={Dashboard} exact></AuthRoute>
      </DefaultLayout>
    </Switch>
  );
}

Routes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default Routes;
