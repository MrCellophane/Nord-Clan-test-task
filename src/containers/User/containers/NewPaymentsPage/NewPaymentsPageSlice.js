import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import PaymentsRepository from 'repositories/PaymentsRepository';

const sliceName = 'payments';

/* eslint no-param-reassign: 0 */

const slice = createSlice({
  name: sliceName,
  initialState: {
    data: {},
    meta: {},
    processing: true,
    processingError: null,
  },
  reducers: {
    startLoading(state) {
      state.processingError = null;
      state.processing = true;
    },
    loadingError(state, { payload }) {
      state.processingError = payload.error;
      state.processing = false;
    },
    loadSuccess(state, { payload }) {
      state.data = payload.data;
      state.meta = payload.meta;
      state.meta = payload.meta;
    },
  },
});

/* eslint no-param-reassign: 1 */

export const { startLoading, loadingError, loadSuccess } = slice.actions;

export const useActions = () => {
  const dispatch = useDispatch();
  return {
    loadPayments: () => {
      dispatch(startLoading());
      return PaymentsRepository.loadPayments()
        .then(data => {
          dispatch(loadSuccess(data));
        })
        .catch(error => {
          dispatch(loadingError({ error: error.message }));

          return Promise.reject(error);
        });
    },
  };
};

export const getSelectors = () => {
  const payments = useSelector(state => state[sliceName]);

  return {
    getPayments: () => payments.data,
    getLoadingState: () => payments.processing,
    getProcessingError: () => payments.processingError,
  };
};

export default slice.reducer;
