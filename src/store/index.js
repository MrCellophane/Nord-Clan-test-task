import { configureStore, combineReducers } from '@reduxjs/toolkit';

import profileReducer from './profile';
import { UserReducers } from '../containers/User';
import { payments } from '../containers/User/containers/NewPaymentsPage';

const store = configureStore({
  reducer: combineReducers({
    ...UserReducers,
    ...payments,
    profile: profileReducer,
  }),
});

export default store;
