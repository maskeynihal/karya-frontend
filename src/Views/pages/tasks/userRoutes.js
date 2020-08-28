import React from 'react';

import { Switch } from 'react-router-dom';
import AuthRoute from 'Components/hoc/authRoute';
import UserAll from './all';
import UserCreate from './create';
/**
 * Internal User routes.
 *
 * @param props
 */
function UserRoutes({ match }) {
  return (
    <>
      {' '}
      <Switch>
        <AuthRoute type="authenticated" path={`${match.url}/create`} component={UserCreate} exact />
        <AuthRoute type="authenticated" path={`${match.url}/all`} component={UserAll} exact />
      </Switch>
    </>
  );
}

export default UserRoutes;
