import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import PaymentsRepository from 'repositories/PaymentsRepository';

const sliceName = 'UserPage';

/* eslint no-param-reassign: 0 */

const slice = createSlice({
  name: sliceName,
  initialState: {
    data: [],
    meta: {},
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
    clearProcessingError(state) {
      state.processingError = null;
    },
    loadSuccess(state, { payload }) {
      state.data = payload.data;
      state.meta = payload.meta;
      state.processing = false;
    },
  },
});

/* eslint no-param-reassign: 1 */

const { start, fail, clearProcessingError, loadSuccess } = slice.actions;

export const useActions = () => {
  const dispatch = useDispatch();

  return {
    loadPayments: params => {
      dispatch(start());
      console.log('UserPaymentsRepository.loadPayments(params)');
      return PaymentsRepository.loadPayments(params)
        .then(response => {
          dispatch(loadSuccess(response));
        })
        .catch(error => {
          dispatch(fail({ error: error.message }));

          return Promise.reject(error);
        });
    },
    clearProcessingError: () => {
      dispatch(clearProcessingError());
    },
  };
};

export const showSelectors = () => {
  const payments = useSelector(state => state[sliceName]);

  console.log('payments', payments);

  return {
    getData: () => payments.data,
    getMeta: () => payments.meta,
    getProcessingState: () => payments.processing,
    getProcessingError: () => payments.processingError,
  };
};

export default slice.reducer;
