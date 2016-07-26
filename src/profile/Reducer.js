
import actionTypes from './Constants';

// we can probably match the image upload stuff in this reducer...
const profile = (
  state = {
    isLoading: false,
    username: undefined,
  },
  action
) => {

  switch (action.type) {
    case actionTypes.fetchRequest:
    case actionTypes.updateRequest:
      return {
        isLoading: true,
      };
    case actionTypes.fetchSuccess:
    case actionTypes.updateSuccess:
      return {
        isLoading: false,
        username: action.entities.result[0],
      }
    case actionTypes.fetchFailure:
    case actionTypes.updateFaiulure:
      return {
        isLoading: false,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
};

export default profile;
