import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import usePaymentsContainer from 'sharedContainers/PaymentsContainer';
import { getSelectors as useAuthStore, useActions as useAuthActions } from 'store/auth';
import appRoutes from 'routes/appRoutes';

import BtnLogout from './components/BtnLogout';

import useStyles from './styles';

const Header = props => {
  const classes = useStyles();
  const { loadPayments } = usePaymentsContainer();

  // https://learn.javascript.ru/task/debounce
  // https://www.npmjs.com/package/debounce
  // const loadPaymetsDeb = debounce(loadPayments, 200);

  const { currentUser } = useAuthStore();
  const { link } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [search, setSearch] = useState('');

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { logout } = useAuthActions();

  const makeLogout = () => {
    logout();
  };

  const handleChange = event => {
    const s = event.target.value;
    setSearch(s);
    loadPayments(currentUser.id, { limit: 99999, search: s });
    // loadPaymetsDeb(currentUser.id, { limit: 99999, search: s });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Личный кабинет</Typography>
          {link === appRoutes.rootPath() && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={search}
                onChange={handleChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          )}

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
              <Button color="inherit" href={appRoutes.rootPath()}>
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

Header.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Header;
