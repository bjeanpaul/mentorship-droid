import * as constants from 'src/profile/constants';


const profile = (
  state = {
    status: constants.STATUS_IDLE,
  },
  action
) => {
  switch (action.type) {
    case constants.PROFILE_FETCH_REQUEST:
    case constants.PROFILE_UPDATE_REQUEST:
    case constants.PROFILE_IMAGE_UPDATE_REQUEST:
      return {
        ...state,
        status: constants.STATUS_BUSY,
      };

    case constants.PROFILE_FETCH_SUCCESS:
    case constants.PROFILE_UPDATE_SUCCESS:
    case constants.PROFILE_IMAGE_UPDATE_SUCCESS:
      return {
        ...state,
        status: constants.STATUS_IDLE,
      };

    case constants.PROFILE_FETCH_FAILURE:
    case constants.PROFILE_UPDATE_FAILURE:
    case constants.PROFILE_IMAGE_UPDATE_FAILURE:
      return {
        ...state,
        status: constants.STATUS_ERROR,
      };

    default:
      return state;
  }
};

export default profile;
