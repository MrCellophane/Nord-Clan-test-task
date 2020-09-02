import React from 'react';
import PropTypes from 'prop-types';
import Copyright from 'components/Copyright';

import useStyles from './styles';

const Base = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.content}>{children}</div>
      </div>
      <div className={classes.copyright}>
        <Copyright />
      </div>
    </div>
  );
};
Base.propTypes = {
  children: PropTypes.node,
};
Base.defaultProps = {
  children: null,
};

export default Base;
