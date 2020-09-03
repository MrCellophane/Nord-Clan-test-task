import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth';
import profilesReducer from './profiles';
import paymentsReducer from './payments';

const store = configureStore({
  reducer: combineReducers({
    payments: paymentsReducer,
    profiles: profilesReducer,
    auth: authReducer,
  }),
});

export default store;
