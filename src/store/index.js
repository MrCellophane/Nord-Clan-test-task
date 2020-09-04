import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth';
import paymentsReducer from './payments';
import currentPaymentReducer from './currentPayment';

const store = configureStore({
  reducer: combineReducers({
    payments: paymentsReducer,
    currentPayment: currentPaymentReducer,
    auth: authReducer,
  }),
});

export default store;
