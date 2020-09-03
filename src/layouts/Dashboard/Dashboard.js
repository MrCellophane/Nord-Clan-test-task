import React from 'react';
import PropTypes from 'prop-types';

import Copyright from 'components/Copyright';
import Header from 'containers/Header';

import useStyles from './styles';

const Dashboard = props => {
  const { children, link } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header link={link} />
      <div className={classes.content}>
        <div className={classes.content}>{children}</div>
      </div>
      <div className={classes.copyright}>
        <Copyright />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string.isRequired,
};
Dashboard.defaultProps = {
  children: null,
};
export default Dashboard;
