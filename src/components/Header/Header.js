import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import appRoutes from 'routes/appRoutes';

import useProfileContainer from 'sharedContainers/ProfileContainer';

import BtnLogout from './components/BtnLogout';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { logout } = useProfileContainer();

  const makeLogout = () => {
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Личный кабинет</Typography>
          <Typography className={classes.balance}>Баланс 10000р</Typography>
          <IconButton
            className={classes.icon}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Button color="inherit" href={appRoutes.userPagePath()}>
                Список платежей
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button color="inherit" href={appRoutes.newPaymentPath()}>
                Создать платеж
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <BtnLogout logout={makeLogout} text="Выход" />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
