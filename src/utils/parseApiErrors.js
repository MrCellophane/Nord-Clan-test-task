import { flatten } from 'ramda';

export default (body, keys) => {
  const {
    response: { data },
  } = body;

  const requiredErrorsKeys = flatten(keys);

  return requiredErrorsKeys.reduce(
    (errors, error) => ({ ...errors, [error]: data.errors[error] ? data.errors[error] : null }),
    {},
  );
};
