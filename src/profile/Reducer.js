import actionTypes from './Constants';


// I'll look into normalizer; I'm pretty sure I can offset these fairly easily.

const reducer = (
  state = {
    isLoading: false,
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
      // this will return something;
      // let's inspect it to see what...
      return {
        isLoading: false,
      };
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
