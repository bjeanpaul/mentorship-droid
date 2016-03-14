import base64 from 'base-64';

import { requestForAPI } from '../services/api';
import actionTypes from '../constants/user';


export function resetPassword(newPassword, onFulfilled) {
  return {
    types: actionTypes.PASSWORD_RESET,
    request: requestForAPI('/mentor/reset-password/', {
      method: 'post',
      body: JSON.stringify({ newPassword }),
    }),
    onFulfilled,
  };
}

export function fetchProfile(onFulfilled) {
  return {
    types: actionTypes.PROFILE_FETCH,
    request: requestForAPI('/mentor/'),
    onFulfilled,
  };
}

export function updateProfile(profile, onFulfilled) {
  return {
    types: actionTypes.PROFILE_UPDATE,
    request: requestForAPI(`/mentor/${profile.id}`, {
      method: 'put',
      body: JSON.stringify(profile),
    }),
    onFulfilled,
  };
}

export function login(username, password, onFulfilled) {
  const authToken = base64.encode(`${username}:${password}`);
  return {
    types: actionTypes.LOGIN,
    request: requestForAPI('/mentor/'),
    payload: { authToken },
    onFulfilled,
  };
}
