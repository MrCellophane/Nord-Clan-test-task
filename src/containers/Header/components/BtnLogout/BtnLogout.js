import React from 'react';
import PropTypes from 'prop-types';

import BootstrapButton from 'containers/Header/BootstrapButton';

const BtnLogout = ({ logout, text }) => {
  return (
    <BootstrapButton color="inherit" onClick={logout} disableRipple fullWidth>
      {text}
    </BootstrapButton>
  );
};

BtnLogout.propTypes = {
  logout: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default BtnLogout;
