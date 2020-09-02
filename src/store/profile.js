import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import ProfileRepository from 'repositories/ProfileRepository';

const sliceName = 'profile';

/* eslint no-param-reassign: 0 */

const slice = createSlice({
  name: sliceName,
  initialState: {
    data: {},
    processing: false,
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
      state.data = payload.data.user;
      state.processing = false;
    },
    logout(state) {
      state.data = {};
    },
  },
});

/* eslint no-param-reassign: 1 */

export const { startLoading, loadingError, loadSuccess, logout } = slice.actions;

export const useActions = () => {
  const dispatch = useDispatch();
  return {
    loadProfile: () => {
      dispatch(startLoading());
      return ProfileRepository.loadProfile()
        .then(({ data }) => {
          dispatch(loadSuccess({ data }));
        })
        .catch(error => {
          dispatch(loadingError({ error: error.message }));

          return Promise.reject(error);
        });
    },

    logout: () => {
      return ProfileRepository.destroy()
        .then(() => {
          const initData = { data: {} };
          dispatch(logout(initData));
        })
        .catch(error => {
          dispatch(loadingError({ error: error.message }));

          return Promise.reject(error);
        });
    },
  };
};

export const getSelectors = () => {
  const profile = useSelector(state => state[sliceName]);
  console.log('profile', profile);

  return {
    getProfile: () => profile.data,
    getLoadingState: () => profile.processing,
  };
};

export default slice.reducer;
