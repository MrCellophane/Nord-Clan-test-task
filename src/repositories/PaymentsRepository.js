import qs from 'qs';
import FetchHelpers from 'utils/FetchHelpers';

export default {
  loadPayment(profileId, paymentId) {
    const path = `https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/profiles/${profileId}/payments/${paymentId}`;
    return FetchHelpers.get(path);
  },
  loadPayments(profileId, params) {
    const query = qs.stringify(params);
    const path = `https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/profiles/${profileId}/payments?${query}`;
    return FetchHelpers.get(path).then(response => ({
      ...response,
      data: response.data.map(p => ({ ...p, sum: parseFloat(p.sum) })),
    }));
  },
  createPayment(profileId, params) {
    const path = `https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/profiles/${profileId}/payments`;
    return FetchHelpers.post(path, ...params);
  },
};
