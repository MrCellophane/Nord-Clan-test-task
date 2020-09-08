import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { setItem, getItem } from 'utils/localStorage';

import ProfileRepository from 'repositories/ProfileRepository';

const sliceName = 'auth';

/* eslint no-param-reassign: 0 */

const slice = createSlice({
  name: sliceName,
  initialState: {
    currentUser: null,
  },
  reducers: {
    successLoading(state, { payload: { profile } }) {
      state.currentUser = profile;
    },
    logout(state) {
      state.currentUser = null;
    },
    start(state) {
      state.processingError = null;
      state.processing = true;
    },
    fail(state, { payload }) {
      state.processingError = payload.error;
      state.processing = false;
    },
  },
});

/* eslint no-param-reassign: 1 */

export const { successLoading, logout, start, fail } = slice.actions;

export const useActions = () => {
  const dispatch = useDispatch();
  return {
    loadCurrentUser: () => {
      const profile = getItem('currentUser');
      if (profile) {
        dispatch(successLoading({ profile }));
      }
    },
    signIn: (email, password) => {
      return ProfileRepository.searchProfile(email)
        .then(({ data }) => {
          const profile = data.find(p => p.password === password);
          if (profile) {
            dispatch(successLoading({ profile }));
            setItem('currentUser', profile);
            return profile;
          }
          return Promise.reject();
        })
        .catch(() => {
          return Promise.reject();
        });
    },

    logout: () => {
      setItem('currentUser', null);
      dispatch(logout());
    },

    updateProfile: (profileId, params) => {
      dispatch(start());
      const { id, balance } = { id: profileId, balance: params.balance };
      return ProfileRepository.updateProfile(profileId, params)
        .then(response => {
          setItem('currentUser', { id, balance });
          dispatch(successLoading({ profile: response.data }));
        })
        .catch(error => {
          dispatch(fail({ error: error.message }));

          return Promise.reject(error);
        });
    },
  };
};

export const getSelectors = () => {
  const auth = useSelector(state => state[sliceName]);

  return {
    currentUser: auth.currentUser,
  };
};

export default slice.reducer;
