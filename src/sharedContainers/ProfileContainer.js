import { getSelectors, useActions } from 'store/profile';

export default () => {
  const { getProfile, getLoadingState } = getSelectors();
  const { loadProfile, logout } = useActions();
  const profile = getProfile();
  const isProfileLoading = getLoadingState();

  return { profile, loadProfile, isProfileLoading, logout };
};
