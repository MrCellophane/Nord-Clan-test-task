import React from 'react';
import { Switch } from 'react-router';
import appRoutes from 'routes/appRoutes';
import SignIn from 'containers/Authenticator/containers/SignIn';
import AppRoute from 'layouts/components/AppRoute';

const NotAuthenticatedUserSwitch = () => {
  return (
    <Switch>
      <AppRoute key={appRoutes.rootPath()} path={appRoutes.rootPath()} component={SignIn} layout="base" />
    </Switch>
  );
};
export default NotAuthenticatedUserSwitch;
