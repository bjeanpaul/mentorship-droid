import * as constants from 'src/constants/auth';
import * as statuses from 'src/statuses/auth';
import { AUTH_LOGOUT } from 'src/constants/auth';


export const createInitialState = () => ({
  status: statuses.authStatusIdle(),
});


const authReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return createInitialState();

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

      return {
        ...state,
        auth,
        profileId,
        status: statuses.authStatusIdle(),
      };
    }

    default:
      return state;
  }
};


export default authReducer;
