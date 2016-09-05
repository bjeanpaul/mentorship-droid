import * as constants from 'src/constants/auth';
import * as statuses from 'src/statuses/auth';


const authReducer = (state = {
  profileId: 1,
  auth: {
    email: 'admin@example.org',
    password: '123',
  },
  status: statuses.authStatusIdle(),
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
