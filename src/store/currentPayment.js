import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import PaymentsRepository from 'repositories/PaymentsRepository';

const sliceName = 'currentPayment';

/* eslint no-param-reassign: 0 */

const slice = createSlice({
  name: sliceName,
  initialState: {
    payment: null,
    processing: true,
    processingError: null,
  },
  reducers: {
    start(state) {
      state.processingError = null;
      state.processing = true;
    },
    fail(state, { payload }) {
      state.processingError = payload.error;
      state.processing = false;
    },
    loadSuccess(state, { payload }) {
      state.payment = payload.payment;
      state.processing = false;
    },
  },
});

/* eslint no-param-reassign: 1 */

const { start, fail, loadSuccess } = slice.actions;

export const useActions = () => {
  const dispatch = useDispatch();

  return {
    loadPayment: (profileId, paymentId) => {
      dispatch(start());

      return PaymentsRepository.loadPayment(profileId, paymentId)
        .then(response => {
          dispatch(loadSuccess({ payment: response.data }));
        })
        .catch(error => {
          dispatch(fail({ error: error.message }));

          return Promise.reject(error);
        });
    },
  };
};

export const showSelectors = () => {
  const currentPayment = useSelector(state => state[sliceName]);

  return {
    getPayment: () => currentPayment.payment,
    getProcessingState: () => currentPayment.processing,
    getProcessingError: () => currentPayment.processingError,
  };
};

export default slice.reducer;
