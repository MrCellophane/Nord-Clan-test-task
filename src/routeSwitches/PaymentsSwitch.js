import React from 'react';
import { Switch } from 'react-router';

import AppRoute from 'layouts/components/AppRoute';
import appRoutes from 'routes/appRoutes';

import PaymentPage from '../containers/PaymentPage';
import PaymentsPage from '../containers/PaymentsPage';
import NewPaymentPage from '../containers/NewPaymentPage';

const PaymentsSwitch = () => {
  return (
    <Switch>
      <AppRoute path={appRoutes.rootPath()} exact layout="dashboard">
        <PaymentsPage />
      </AppRoute>

      <AppRoute path={appRoutes.paymentPath(':paymentId')} exact layout="dashboard">
        <PaymentPage />
      </AppRoute>

      <AppRoute path={appRoutes.newPaymentPath()} exact component={NewPaymentPage} layout="dashboard" />
    </Switch>
  );
};

export default PaymentsSwitch;
