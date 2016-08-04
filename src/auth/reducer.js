import {
  AUTH_SET_TOKEN,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_PASSWORD_RESET_REQUEST,
  AUTH_PASSWORD_RESET_SUCCESS,
  AUTH_PASSWORD_RESET_FAILURE,
} from './constants';


const auth = (
  state = {
    authToken: '',
  },
  action
) => {
  switch (action.type) {

    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Incorrect email or password combination.',
      };

    case AUTH_SET_TOKEN:
      return { ...state, authToken: action.authToken };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profileId: action.payload.result[0],
      };

    default:
      return state;
  }
};
export default auth;
