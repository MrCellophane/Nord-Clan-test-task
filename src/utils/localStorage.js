import localStorage from 'local-storage-fallback';
import { not, isNil } from 'ramda';

export function hasItem(key) {
  return not(isNil(localStorage.getItem(key)));
}

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
