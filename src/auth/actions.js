import { isEmpty } from 'lodash';
import { listProfiles } from 'src/api';

import {
  AUTH_LOGIN_BUSY,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from './constants';


const loginBusy = (email, password) => ({
  type: AUTH_LOGIN_BUSY,
  payload: {
    auth: {
      email,
      password,
    },
  },
});


const loginFailure = () => ({
  type: AUTH_LOGIN_FAILURE,
});


const loginSuccess = entities => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: { entities },
});


const loginDone = entities => isEmpty(entities.results)
  ? loginFailure()
  : loginSuccess(entities);


export const login = (email, password) => dispatch => Promise.resolve()
  .then(() => loginBusy(email, password))
  .then(dispatch)
  .then(() => listProfiles({
    email,
    password,
  }))
  .then(loginDone)
  .then(dispatch);
