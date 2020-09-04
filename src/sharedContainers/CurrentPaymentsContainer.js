import { showSelectors, useActions } from 'store/currentPayment';

export default () => {
  const { getPayment, getProcessingState: getLoadingState, getProcessingError: getLoadingError } = showSelectors();
  const { loadPayment } = useActions();

  const loading = getLoadingState();
  const loadingError = getLoadingError();
  const currentPayment = getPayment();

  return { currentPayment, loadPayment, loading, loadingError };
};
