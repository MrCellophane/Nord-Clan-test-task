import PropTypes from 'prop-types';

import Presenter from 'utils/PropTypesPresenter';

export default new Presenter(
  {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
  },
  {},
);
