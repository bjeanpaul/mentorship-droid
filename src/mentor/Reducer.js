import actionTypes from './Constants';

const mentor = function training(state = {
  isLoading: false,
  isAuthenticated: false,
  authToken: '',
  results: [],
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

export default mentor;
