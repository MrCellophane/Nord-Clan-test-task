import React, { useEffect } from 'react';
import { isEmpty, isNil } from 'ramda';

import Backdrop from '@material-ui/core/Backdrop';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';

import UserPaymentsPresenter from 'presenters/UserPaymentsPresenter';

import PaymentList from './components/PaymentList/PaymentList';
import { showSelectors, useActions } from './UserPageSlice';

const UserPage = () => {
  const {
    getData: getUserPayment,
    getProcessingState: getLoadingState,
    getProcessingError: getLoadingError,
  } = showSelectors();
  const { loadPayments, clearProcessingErrors: clearLoadingError } = useActions();

  useEffect(() => {
    loadPayments();
  }, []);

  const loading = getLoadingState();
  const loadingError = getLoadingError();
  const userPayment = getUserPayment();
  const payments = UserPaymentsPresenter.payments(userPayment);
  console.log('payments', payments);

  if (isEmpty(userPayment) && !isNil(loadingError)) {
    return (
      <Backdrop open>
        <Alert severity="error">{loadingError}</Alert>
      </Backdrop>
    );
  }

  return (
    <Container component="main" maxWidth="lg">
      {loading}

      {isNil(loadingError) || (
        <Backdrop open style={{ zIndex: 999 }}>
          <Alert severity="error" onClose={clearLoadingError}>
            {loadingError}
          </Alert>
        </Backdrop>
      )}
      <PaymentList payments={payments} />
    </Container>
  );
};
export default UserPage;
