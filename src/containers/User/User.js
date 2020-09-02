import React from 'react';
import { Switch, Route } from 'react-router';

import appRoutes from 'routes/appRoutes';

import UserPage from './containers/UserPage';
import PaymentsPage from './containers/PaymentsPage';
import NewPaymentsPage from './containers/NewPaymentsPage';

const User = () => {
  return (
    <Switch>
      <Route path={appRoutes.userPagePath()} exact component={UserPage} />
      {/* <Redirect to={appRoutes.userPagePath()} /> */}
      <Route path={appRoutes.paymentPath()} exact component={PaymentsPage} />
      {/* <Redirect to={appRoutes.paymentPath()} /> */}
      <Route path={appRoutes.newPaymentPath()} exact component={NewPaymentsPage} />
      {/* <Redirect to={appRoutes.newPaymentPath()} /> */}
    </Switch>
  );
};

export default User;
