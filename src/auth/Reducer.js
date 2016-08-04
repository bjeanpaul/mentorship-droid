import actionTypes from './Constants';
import { combineReducers } from 'redux';




// this is kinda generic, I'm going to assume that we're going to have a
// lot of these, and perhaps we should generate them as well.
// same going for the login reducer.

// there may be a great way to just generate everything;

// we generate
  // constants
  // actions
  // reducers (not yet)
    // at most we need to know 3 things;
    // network request started, finished, and broken.
    // maybe we can normalize things
  // the container view can also be some kind of generated view?


const resetPassword = (state = {
  isLoading: false,
  isDone: false,
}, action) => {
  switch (action.type) {
    case actionTypes.resetPassword.createRequest:
      return {
        isLoading: true,
        isDone: false,
      };
    case actionTypes.resetPassword.createSuccess:
      return {
        isLoading: false,
        isDone: true,
      };

    case actionTypes.resetPassword.createFailure:
      return {
        isLoading: false,
        isDone: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

const login = function training(state = {
  isLoading: false,
  isAuthenticated: false,
  authToken: '',
}, action) {
  switch (action.type) {
    case actionTypes.MENTOR_AUTH_TOKEN_SET:
      return Object.assign({}, state, { authToken: action.authToken });

    case actionTypes.fetchRequest:
      return Object.assign({}, state, {
        isLoading: true,
        isAuthenticated: false,
        errorMessage: '',
      });

    case actionTypes.fetchSuccess:
      const {
        username,
        first_name,
        last_name,
        contact_number,
      } = action.json.results;

      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true,
        username,
        name: `${first_name} ${last_name}`,
        contactNumber: contact_number,
      });

    case actionTypes.fetchFailure:
      return {
        isLoading: false,
        isAuthenticated: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default combineReducers({
  login,
  resetPassword,
});
