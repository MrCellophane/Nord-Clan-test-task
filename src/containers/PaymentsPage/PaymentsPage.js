import React, { useEffect, useState } from 'react';
import { isEmpty, isNil } from 'ramda';
import PropTypes from 'prop-types';

import Backdrop from '@material-ui/core/Backdrop';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';

import usePaymentsContainer from 'sharedContainers/PaymentsContainer';

import PaymentList from './components/PaymentList/PaymentList';

const PaymentsPage = ({ currentUser }) => {
  const { payments, loadPayments, loading, loadingError, clearLoadingError } = usePaymentsContainer();

  useEffect(() => {
    loadPayments(currentUser.id, { limit: 99999 });
  }, []);

  if (isEmpty(payments) && !isNil(loadingError)) {
    return (
      <Backdrop open>
        <Alert severity="error">{loadingError}</Alert>
      </Backdrop>
    );
  }

  console.log(loading);

  return (
    <Container component="main" maxWidth="lg">
      {isNil(loadingError) || (
        <Backdrop open style={{ zIndex: 999 }}>
          <Alert severity="error" onClose={clearLoadingError}>
            {loadingError}
          </Alert>
        </Backdrop>
      )}

      {payments.length > 0 ? <PaymentList payments={payments} /> : <div>У вас еще нет платежей, создайте новый!</div>}
    </Container>
  );
};

PaymentsPage.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default PaymentsPage;
