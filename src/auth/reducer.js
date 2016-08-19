import { serializeAuth } from 'src/api/request';
import * as constants from 'src/auth/constants';
import * as statuses from 'src/auth/statuses';


const authReducer = (state = {
  status: authStatusIdle(),
}, action) => {
  switch (action.type) {
    case constants.AUTH_LOGIN_REQUEST:
      return {
        ...state,
        status: statuses.authStatusBusy(),
      };

    case constants.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        status: statuses.authStatusError(),
      };

    case constants.AUTH_LOGIN_NOT_FOUND:
      return {
        ...state,
        status: statuses.authStatusNotFound(),
      };

    case constants.AUTH_LOGIN_SUCCESS: {
      const {
        payload: {
          auth,
          result: [profileId],
        },
      } = action;

      const { email, password } = auth;

      return {
        ...state,
        profileId,
        status: statuses.authStatusIdle(),

        // TODO don't add `authToken` once we are using api in all actions
        auth: {
          ...auth,
          authToken: serializeAuth(email, password),
        },
      };
    }

    default:
      return state;
  }
};


export default authReducer;
