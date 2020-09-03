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
    successSignIn(state, { payload: { profile } }) {
      state.currentUser = profile;
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

/* eslint no-param-reassign: 1 */

export const { successSignIn, logout } = slice.actions;

export const useActions = () => {
  const dispatch = useDispatch();
  return {
    loadCurrentUser: () => {
      const profile = getItem('currentUser');
      if (profile) {
        dispatch(successSignIn({ profile }));
      }
    },
    signIn: (email, password) => {
      return ProfileRepository.searchProfile(email)
        .then(({ data }) => {
          const profile = data.find(p => p.password === password);
          if (profile) {
            dispatch(successSignIn({ profile }));
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
  };
};

export const getSelectors = () => {
  const auth = useSelector(state => state[sliceName]);

  return {
    currentUser: auth.currentUser,
  };
};

export default slice.reducer;
