import React from 'react';
import { Switch, Redirect } from 'react-router';
import appRoutes from 'routes/appRoutes';
import SignIn from 'containers/Authenticator/containers/SignIn';
import AppRoute from 'layouts/components/AppRoute';

const NotAuthenticatedUserSwitch = () => {
  return (
    <Switch>
      <AppRoute key={appRoutes.signInPath()} path={appRoutes.signInPath()} component={SignIn} layout="base" />
      {/* <Redirect to={appRoutes.signInPath()} /> */}
    </Switch>
  );
};
export default NotAuthenticatedUserSwitch;
