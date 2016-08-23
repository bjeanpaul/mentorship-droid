import { listProfiles, ApiAuthenticationError, ApiResponseError } from 'src/api';
import { switchError } from 'src/helpers';
import { staticAction, dataAction } from 'src/actionHelpers';
import * as constants from 'src/auth/constants';
import { pushWelcomeRoute } from 'src/navigation/actions';


export const loginRequest = staticAction(constants.AUTH_LOGIN_REQUEST);
export const loginSuccess = dataAction(constants.AUTH_LOGIN_SUCCESS);
export const loginFailure = staticAction(constants.AUTH_LOGIN_FAILURE);
export const loginNotFound = staticAction(constants.AUTH_LOGIN_NOT_FOUND);


export const loginDone = (data, dispatch) => Promise.resolve(data)
  .then(loginSuccess)
  .then(dispatch)
  .then(pushWelcomeRoute)
  .then(dispatch);


export const login = (email, password) => dispatch => Promise.resolve()
  .then(loginRequest)
  .then(dispatch)
  .then(() => listProfiles({
    email,
    password,
  }, {
    email,
  }))
  .then(data => ({
    ...data,
    auth: {
      email,
      password,
    },
  }))
  .then(d => loginDone(d, dispatch), switchError([
    [ApiAuthenticationError, loginNotFound],
    [ApiResponseError, loginFailure],
  ]))
  .then(dispatch);
