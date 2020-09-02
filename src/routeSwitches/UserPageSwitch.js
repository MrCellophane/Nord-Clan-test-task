import React from 'react';
import { Switch, Redirect } from 'react-router';

import AppRoute from 'layouts/components/AppRoute';
import appRoutes from 'routes/appRoutes';

import User from '../containers/User';

const UserPageSwitch = () => {
  return (
    <Switch>
      <AppRoute key={appRoutes.userPagePath()} path={appRoutes.userPagePath()} component={User} layout="dashboard" />
      {/* <Redirect to={appRoutes.userPagePath()} /> */}
      <AppRoute path={appRoutes.paymentPath()} exact component={User} />
      {/* <Redirect to={appRoutes.paymentPath()} /> */}
      <AppRoute path={appRoutes.newPaymentPath()} exact component={User} />
      {/* <Redirect to={appRoutes.paymentPath()} /> */}
    </Switch>
  );
};

export default UserPageSwitch;
