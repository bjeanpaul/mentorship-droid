import { isEmpty } from 'lodash';
import { listProfiles } from 'src/api';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from './constants';


const loginBusy = () => ({
  type: AUTH_LOGIN_REQUEST,
});


const loginFailure = () => ({
  type: AUTH_LOGIN_FAILURE,
});


const loginSuccess = (entities, auth) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    entities,
    auth,
  },
});


const loginDone = (entities, auth) => isEmpty(entities.results)
  ? loginFailure()
  : loginSuccess(entities, auth);


export const login = (email, password) => dispatch => Promise.resolve()
  .then(() => loginBusy(email, password))
  .then(dispatch)
  .then(() => listProfiles({
    email,
    password,
  }))
  .then(entities => loginDone(entities, {
    email,
    password,
  }))
  .then(dispatch);
