import * as constants from 'src/profile/constants';


const profile = (
  state = {
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case constants.PROFILE_FETCH_REQUEST:
    case constants.PROFILE_UPDATE_REQUEST:
    case constants.PROFILE_IMAGE_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case constants.PROFILE_FETCH_SUCCESS:
    case constants.PROFILE_UPDATE_SUCCESS:
    case constants.PROFILE_IMAGE_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case constants.PROFILE_FETCH_FAILURE:
    case constants.PROFILE_UPDATE_FAILURE:
    case constants.PROFILE_IMAGE_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default profile;
