import React, { useEffect } from 'react';
import { isEmpty, isNil } from 'ramda';
import PropTypes from 'prop-types';

import Backdrop from '@material-ui/core/Backdrop';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';

import usePaymentsContainer from 'sharedContainers/PaymentsContainer';

import PaymentList from './components/PaymentList/PaymentList';
import NotPayments from './components/NotPayments/NotPayments';

const PaymentsPage = ({ currentUser }) => {
  const { payments, loadPayments, loading, loadingError } = usePaymentsContainer();

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

  return (
    <Container component="main" maxWidth="lg">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>{!isEmpty(payments) ? <PaymentList payments={payments} currentUser={currentUser} /> : <NotPayments />}</>
      )}
    </Container>
  );
};

PaymentsPage.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default PaymentsPage;
