import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import PaymentsRepository from 'repositories/PaymentsRepository';

const sliceName = 'newPayment';

/* eslint no-param-reassign: 0 */

const slice = createSlice({
  name: sliceName,
  initialState: {
    payment: null,
  },
  reducers: {
    successCreate(state, { payload: { payload } }) {
      state.payment = payload;
    },
  },
});

/* eslint no-param-reassign: 1 */

export const { successCreate } = slice.actions;

export const useActions = () => {
  const dispatch = useDispatch();

  return {
    createPayment: (currentUserId, ...params) => {
      return PaymentsRepository.createPayment(currentUserId, params).then(response => {
        dispatch(successCreate({ payment: response.data }));
      });
    },
  };
};

export const getSelectors = () => {
  const newPayment = useSelector(state => state[sliceName]);

  return {
    newPayment: newPayment.payment,
  };
};

export default slice.reducer;
