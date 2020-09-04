import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';

import AppRoute from 'layouts/components/AppRoute';
import appRoutes from 'routes/appRoutes';

import PaymentPage from '../containers/PaymentPage';
import PaymentsPage from '../containers/PaymentsPage';
import NewPaymentPage from '../containers/NewPaymentPage';

const PaymentsSwitch = ({ currentUser }) => {
  return (
    <Switch>
      <AppRoute path={appRoutes.newPaymentPath()} exact layout="dashboard">
        <NewPaymentPage currentUser={currentUser} />
      </AppRoute>

      <AppRoute path={appRoutes.rootPath()} exact layout="dashboard">
        <PaymentsPage currentUser={currentUser} />
      </AppRoute>

      <AppRoute path={appRoutes.paymentPath(':paymentId')} exact layout="dashboard">
        <PaymentPage currentUser={currentUser} />
      </AppRoute>
    </Switch>
  );
};

PaymentsSwitch.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
};

export default PaymentsSwitch;
