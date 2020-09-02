import PropTypes from 'prop-types';

import Presenter from 'utils/PropTypesPresenter';

export default new Presenter(
  {
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    balance: PropTypes.string,
  },
  {},
);
