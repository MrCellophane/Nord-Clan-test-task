import qs from 'qs';
import FetchHelpers from 'utils/FetchHelpers';

export default {
  searchProfile(email) {
    const query = qs.stringify({ email });
    const path = `https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/profiles?${query}`;
    return FetchHelpers.get(path);
  },
  loadProfile(params) {
    return FetchHelpers.get(params);
  },
};
