import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { isEmpty, isNil } from 'ramda';

import { getSelectors, useActions } from 'store/auth';

import NotAuthenticatedUserSwitch from './routeSwitches/NotAuthenticatedUserSwitch';
import PaymentsSwitch from './routeSwitches/PaymentsSwitch';
import history from './utils/history';

const App = () => {
  const { currentUser } = getSelectors();
  const { loadCurrentUser } = useActions();

  useEffect(() => {
    loadCurrentUser();
  }, []);

  const renderSwitch = () => {
    if (isEmpty(currentUser) || isNil(currentUser)) {
      return <NotAuthenticatedUserSwitch />;
    }

    return <PaymentsSwitch currentUser={currentUser} />;
  };

  return <Router history={history}>{renderSwitch()}</Router>;
};

export default App;
