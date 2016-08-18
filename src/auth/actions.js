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


const loginSuccess = ({ result, entities }, auth) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    auth,
    result,
    entities,
  },
});


const loginDone = (data, auth) => !isEmpty(data.result)
  ? loginSuccess(data, auth)
  : loginFailure();


export const login = (email, password) => dispatch => Promise.resolve()
  .then(() => loginBusy(email, password))
  .then(dispatch)
  .then(() => listProfiles({
    email,
    password,
  }))
  .then(data => loginDone(data, {
    email,
    password,
  }))
  .then(dispatch);
