import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const RouterLink = props => {
  const { children, ...params } = props;

  return (
    <Link
      className={cn(
        'MuiTypography-root',
        'MuiLink-root',
        'MuiLink-underlineHover',
        'MuiTypography-body2',
        'MuiTypography-colorPrimary',
      )}
      {...params}
    >
      {children}
    </Link>
  );
};

RouterLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RouterLink;
