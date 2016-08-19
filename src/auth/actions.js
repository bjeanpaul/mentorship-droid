import { isEmpty } from 'lodash';
import { listProfiles } from 'src/api';
import { staticAction, dataAction } from 'src/actionHelpers';
import * as constants from 'src/auth/constants';


const loginBusy = staticAction(constants.AUTH_LOGIN_REQUEST);


const loginFailure = staticAction(constants.AUTH_LOGIN_FAILURE);


const loginSuccess = dataAction(constants.AUTH_LOGIN_SUCCESS);


const loginDone = data => !isEmpty(data.result)
  ? loginSuccess(data)
  : loginFailure();


// TODO use ...NOT_FOUND where ...FAILURE is, and add change ...FAILURE to mean
// system errors
export const login = (email, password) => dispatch => Promise.resolve()
  .then(loginBusy)
  .then(dispatch)
  .then(() => listProfiles({
    email,
    password,
  }))
  .then(data => ({
    ...data,
    auth: {
      email,
      password,
    },
  }))
  .then(loginDone)
  .then(dispatch);
