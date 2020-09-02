import humps from 'humps';
import { is } from 'ramda';

const isObject = obj => is(Object, obj);
const isFile = obj => obj instanceof File;
const isArray = obj => obj instanceof Array;
export const camelize = obj => humps.camelizeKeys(obj);
export const decamelize = obj => {
  if (isArray(obj)) {
    return obj.map(item => decamelize(item));
  }
  if (isObject(obj) && !isFile(obj)) {
    return Object.keys(obj).reduce(
      (acc, next) => ({
        ...acc,
        [humps.decamelize(next, { split: /(?=[A-Z0-9])/ })]: decamelize(obj[next]),
      }),
      {},
    );
  }
  return obj;
};
