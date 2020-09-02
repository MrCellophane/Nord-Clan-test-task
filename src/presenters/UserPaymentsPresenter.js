import PropTypes from 'prop-types';

import Presenter from 'utils/PropTypesPresenter';

import PaymentsPresenter from './PaymentsPresenter';
import UserPresenter from './UserPresenter';

export default new Presenter(
  {
    user: UserPresenter.shape(),
    payments: PropTypes.arrayOf(PaymentsPresenter.shape()),
  },
  {},
);
