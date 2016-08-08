import base64 from 'base-64';
import { normalize, Schema, arrayOf } from 'normalizr';

import { getBaseURL, getAuthorizationToken } from 'src/configuration.js';
import {
  AUTH_SET_TOKEN,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_PASSWORD_RESET_REQUEST,
  AUTH_PASSWORD_RESET_SUCCESS,
  AUTH_PASSWORD_RESET_FAILURE,
} from './constants';


const profileSchema = new Schema('profile');


export const login = (email, password, onSuccess) => (dispatch, getState) => {
  const authToken = base64.encode(`${email}:${password}`);
  dispatch({
    type: AUTH_SET_TOKEN,
    authToken,
  });

  dispatch({ type: AUTH_LOGIN_REQUEST });
  return fetch(`${getBaseURL()}/profile/?email=${email}`, {
    headers: {
      authorization: `Basic ${getAuthorizationToken(getState())}`,
    },
  })
  .then(response => response.json())
  .then(json => {
    const entities = normalize(json.results, arrayOf(profileSchema));
    if (entities.result.length === 0) {
      return dispatch({ type: AUTH_LOGIN_FAILURE });
    }
    // TODO: How do we deal with side affects?
    onSuccess();
    return dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: entities,
    });
  })
  .catch(() => dispatch({ type: AUTH_LOGIN_FAILURE }));
};

// TODO: resetPassword
export const resetPassword = (email) => (dispatch) => {
};
