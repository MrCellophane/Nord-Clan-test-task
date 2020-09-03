import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const BtnLogout = ({ logout, text }) => {
  return (
    <Button color="inherit" onClick={logout}>
      {text}
    </Button>
  );
};

BtnLogout.propTypes = {
  logout: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default BtnLogout;
