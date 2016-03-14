import { combineReducers } from 'redux';

import actionTypes from '../constants/user';

const [
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
] = actionTypes.PROFILE_UPDATE;

const [
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAILURE,
] = actionTypes.PROFILE_FETCH;

// TODO: we'll need to introduce the workflow "phase" here.
function user(state = {}, action) {
  switch (action.type) {
    case PROFILE_UPDATE_REQUEST:
    case PROFILE_FETCH_REQUEST:
      return Object.assign({}, state, { isLoading: false });

    case PROFILE_UPDATE_SUCCESS:
    case PROFILE_FETCH_SUCCESS: {
      const {
        id,
        username,
        first_name,
        last_name,
        email,
        contact_number,
      } = action.json.results[0];

      return {
        isLoading: false,
        id,
        username,
        name: `${first_name} ${last_name}`,
        email,
        contactNumber: contact_number,
      };
    }

    case PROFILE_UPDATE_FAILURE:
    case PROFILE_FETCH_FAILURE:
      // TODO: Check out error response
      return Object.assign({}, state, { isLoading: false, error: action.error });

    default:
      return state;
  }
}

const [
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
] = actionTypes.LOGIN;
function auth(state = {
  isAuthenticated: false,
  isLoading: false,
},
  action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoading: true,
        isAuthenticated: false,
        authToken: action.authToken,
      };
    case LOGIN_SUCCESS:
        return Object.assign(
          {},
          state,
          {
            isLoading: false,
            isAuthenticated: true,
          },
        );
    case LOGIN_FAILURE:
      return {
        isLoading: false,
        isAuthenticated: false,
        authToken: '',
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth,
  user,
});

export default rootReducer;
