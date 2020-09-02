import { isEmpty, isNil } from 'ramda';

import parseApiErrors from './parseApiErrors';

const defaultError = 'Unexpected error has occurred';

const parseFormErrors = (body, ...keys) => {
  if (isNil(body.response) || isEmpty(body.response?.data?.error)) {
    return { default: defaultError };
  }

  return parseApiErrors(body, keys);
};

export default parseFormErrors;
