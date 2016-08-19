import { isEmpty } from 'lodash';
import { listProfiles } from 'src/api';
import * as constants from 'src/auth/constants';


const loginBusy = () => ({
  type: constants.AUTH_LOGIN_REQUEST,
});


const loginFailure = () => ({
  type: constants.AUTH_LOGIN_FAILURE,
});


const loginSuccess = ({ result, entities }, auth) => ({
  type: constants.AUTH_LOGIN_SUCCESS,
  payload: {
    auth,
    result,
    entities,
  },
});


const loginDone = (data, auth) => !isEmpty(data.result)
  ? loginSuccess(data, auth)
  : loginFailure();


// TODO use ...NOT_FOUND where ...FAILURE is, and add change ...FAILURE to mean
// system errors
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
