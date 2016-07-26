import { combineReducers } from 'redux'
import actionTypes from './Constants';






const reducer = (
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

export default reducer;
