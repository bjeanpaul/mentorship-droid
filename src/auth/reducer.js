import { serializeAuth } from 'src/api/request';
import * as constants from 'src/auth/constants';


const authReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.AUTH_LOGIN_REQUEST:
      return {
        ...state,

        isLoading: true,
        errorMessage: '',
      };

    case constants.AUTH_LOGIN_FAILURE:
      return {
        ...state,

        // TODO use constant for status type instead and put copy in component
        isLoading: false,
        errorMessage: 'Incorrect email or password combination.',
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
        isLoading: false,
        profileId,

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
