import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { isEmpty, isNil } from 'ramda';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import NotAuthenticatedUserSwitch from './routeSwitches/NotAuthenticatedUserSwitch';
import UserPageSwitch from './routeSwitches/UserPageSwitch';
import history from './utils/history';

import useProfileContainer from './sharedContainers/ProfileContainer';

const App = () => {
  const { profile, loadProfile, isProfileLoading } = useProfileContainer();

  useEffect(() => {
    loadProfile();
  }, []);

  const renderSwitch = () => {
    if (isEmpty(profile) || isNil(profile)) {
      return <NotAuthenticatedUserSwitch />;
    }

    return <UserPageSwitch />;
  };

  if (isProfileLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return <Router history={history}>{renderSwitch()}</Router>;
};

export default App;
