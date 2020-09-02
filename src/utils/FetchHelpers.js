import axios from 'axios';
import { camelize, decamelize } from 'utils/keysConverter';

const { CancelToken } = axios;
const csrfTokenInput = document.getElementsByName('csrf-token')[0];

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['X-CSRF-Token'] = csrfTokenInput ? csrfTokenInput.content : null;

export const createRequestToken = () => CancelToken.source();
export default {
  post(url, json) {
    const body = decamelize(json);
    return axios
      .post(url, body)
      .then(camelize)
      .catch(err => {
        const camelizedErr = camelize(err);
        return Promise.reject(camelizedErr);
      });
  },
  put(url, json) {
    const body = decamelize(json);
    return axios
      .put(url, body)
      .then(camelize)
      .catch(err => {
        const camelizedErr = camelize(err);
        return Promise.reject(camelizedErr);
      });
  },
  get(url) {
    return axios
      .get(url)
      .then(camelize)
      .catch(err => {
        const camelizedErr = camelize(err);
        return Promise.reject(camelizedErr);
      });
  },
  delete(url) {
    return axios
      .delete(url)
      .then(camelize)
      .catch(err => {
        const camelizedErr = camelize(err);
        return Promise.reject(camelizedErr);
      });
  },
};
