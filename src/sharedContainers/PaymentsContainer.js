import { showSelectors, useActions } from 'store/payments';

export default () => {
  const {
    getData: getPayment,
    getProcessingState: getLoadingState,
    getProcessingError: getLoadingError,
  } = showSelectors();
  const { loadPayments, clearProcessingErrors: clearLoadingError } = useActions();

  const loading = getLoadingState();
  const loadingError = getLoadingError();
  const payments = getPayment();

  return { payments, loadPayments, loading, loadingError, clearLoadingError };
};
