import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import Base from 'layouts/Base';
import Dashboard from 'layouts/Dashboard';

const AppRoute = props => {
  const { layout, title, ...rest } = props;
  switch (layout) {
    case 'base':
      return (
        <Base>
          <Route {...rest} />
        </Base>
      );
    case 'dashboard':
      return (
        <Dashboard>
          <Route {...rest} />
        </Dashboard>
      );
    default:
      return null;
  }
};

AppRoute.propTypes = {
  layout: PropTypes.oneOf(['base', 'dashboard']),
  title: PropTypes.string,
};
AppRoute.defaultProps = {
  layout: 'dashboard',
  title: null,
};

export default AppRoute;
