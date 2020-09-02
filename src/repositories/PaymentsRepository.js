import FetchHelpers from 'utils/FetchHelpers';

export default {
  loadPayments() {
    const path = 'https://cors-anywhere.herokuapp.com/https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/payments';
    return FetchHelpers.get(path);
  },
  createPayment(params) {
    const path = 'https://cors-anywhere.herokuapp.com/https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/payments';
    return FetchHelpers.post(path, params);
  },
  destroy() {
    const path = 'https://cors-anywhere.herokuapp.com/https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/payments';
    return FetchHelpers.delete(path);
  },
};
