import React, { useState } from 'react';
import { Switch, Route } from 'react-router';

import appRoutes from 'routes/appRoutes';

import UserPage from './containers/UserPage';
import PaymentsPage from './containers/PaymentsPage';
import NewPaymentsPage from './containers/NewPaymentsPage';

const User = props => {
  const [userPayment, changePayment] = useState(null);
  const handleViewCompanyReport = payments => {
    console.log('changePayment(payments)', changePayment(payments));
    changePayment(payments);
  };

  console.log('User', props);
  return (
    <Switch>
      <Route path={appRoutes.rootPath()}>
        <UserPage handleViewCompanyReport={handleViewCompanyReport} />
      </Route>
      <Route path={appRoutes.paymentPath(':paymentId')}>
        <PaymentsPage payment={userPayment} />
      </Route>

      <Route path={appRoutes.newPaymentPath()} exact component={NewPaymentsPage} />
    </Switch>
  );
};

export default User;
