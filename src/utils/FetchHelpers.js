import axios from 'axios';

const { CancelToken } = axios;

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const createRequestToken = () => CancelToken.source();
export default {
  post(url, json) {
    return axios.post(url, json);
  },
  put(url, json) {
    return axios.put(url, json);
  },
  get(url) {
    return axios.get(url);
  },
};
