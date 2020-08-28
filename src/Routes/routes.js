import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'Views/pages/home';
import RegisterPage from 'Views/pages/register';
import LoginPage from 'Views/pages/login';
import AuthRoute from 'Components/hoc/authRoute';
import DefaultLayout from 'Views/layouts/default';
import Dashboard from 'Views/pages/dashboard';
import { Users, UsersCreate, UsersShow, UsersEdit } from 'Views/pages/users';
import { Projects, ProjectsCreate, ProjectsShow, ProjectsEdit } from 'Views/pages/projects';
import { Tasks, TasksCreate, TasksShow, TasksEdit } from 'Views/pages/tasks';
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
        {/* //userRoutes */}
        <AuthRoute type="authenticated" path="/users" component={Users} {...props} exact></AuthRoute>
        <AuthRoute type="authenticated" path="/users/create" component={UsersCreate} {...props} exact></AuthRoute>
        <AuthRoute type="authenticated" path="/users/show/:id" component={UsersShow} {...props} exact></AuthRoute>
        <AuthRoute type="authenticated" path="/users/edit/:id" component={UsersEdit} {...props} exact></AuthRoute>
        {/* ProjectRoutes */}
        <AuthRoute type="authenticated" path="/projects" component={Projects} {...props} exact></AuthRoute>
        <AuthRoute type="authenticated" path="/projects/create" component={ProjectsCreate} {...props} exact></AuthRoute>
        <AuthRoute type="authenticated" path="/projects/show/:id" component={ProjectsShow} {...props} exact></AuthRoute>
        <AuthRoute type="authenticated" path="/projects/edit/:id" component={ProjectsEdit} {...props} exact></AuthRoute>
        {/* TaskRoutes */}
        <AuthRoute type="authenticated" path="/tasks" component={Tasks} {...props} exact></AuthRoute>
        <AuthRoute
          type="authenticated"
          path="/projects/:projectId/tasks/create"
          component={TasksCreate}
          {...props}
          exact
        ></AuthRoute>
        <AuthRoute
          type="authenticated"
          path="/projects/:projectId/tasks/show/:id"
          component={TasksShow}
          {...props}
          exact
        ></AuthRoute>
        <AuthRoute
          type="authenticated"
          path="/projects/:projectId/tasks/edit/:id"
          component={TasksEdit}
          {...props}
          exact
        ></AuthRoute>
      </DefaultLayout>
    </Switch>
  );
}

Routes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default Routes;
