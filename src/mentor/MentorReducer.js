import actionTypes from './MentorConstants';

const mentor = function training(state = {
  isLoading: false,
  authToken: '',
  results: [],
}, action) {
  switch (action.type) {
    case actionTypes.MENTOR_AUTH_TOKEN_SET:
      return Object.assign({}, state, { authToken: action.authToken });

    case actionTypes.fetchRequest:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case actionTypes.fetchSuccess:
      return Object.assign({}, state, {
        isLoading: false,
        results: action.results,
      });

    case actionTypes.fetchFailure:
      return Object.assign({}, state, {
        isLoading: false,
      });

    default:
      return state;
  }
};

export default mentor;
