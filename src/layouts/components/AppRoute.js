import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import Base from 'layouts/Base';
import Dashboard from 'layouts/Dashboard';

const AppRoute = props => {
  const { layout, ...rest } = props;

  switch (layout) {
    case 'base':
      return (
        <Base>
          <Route {...rest} />
        </Base>
      );
    case 'dashboard':
      return (
        <Dashboard link={rest.path}>
          <Route {...rest} />
        </Dashboard>
      );
    default:
      return null;
  }
};

AppRoute.propTypes = {
  layout: PropTypes.oneOf(['base', 'dashboard']),
};
AppRoute.defaultProps = {
  layout: 'dashboard',
};

export default AppRoute;
