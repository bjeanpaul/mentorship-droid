import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from './constants';


const authReducer = (state = {}, action) => {
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

        // TODO use constant for status type instead and put copy in component
        isLoading: false,
        errorMessage: 'Incorrect email or password combination.',
      };

    case AUTH_LOGIN_SUCCESS: {
      const {
        payload: {
          auth,
          result: [profileId],
        },
      } = action;

      return {
        ...state,
        isLoading: false,
        profileId,
        auth,
      };
    }

    default:
      return state;
  }
};


export default authReducer;
