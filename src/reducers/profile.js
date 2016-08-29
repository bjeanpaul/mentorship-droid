import * as constants from 'src/constants/profile';
import * as statuses from 'src/profile/statuses';

export const getProfile = (state, profileId) => state.entities.profiles[profileId];

const profile = (
  state = {
    status: statuses.profileStatusIdle(),
  },
  action
) => {
  switch (action.type) {
    case constants.PROFILE_FETCH_REQUEST:
    case constants.PROFILE_UPDATE_REQUEST:
    case constants.PROFILE_IMAGE_UPDATE_REQUEST:
      return {
        ...state,
        status: statuses.profileStatusBusy(),
      };

    case constants.PROFILE_FETCH_SUCCESS:
    case constants.PROFILE_UPDATE_SUCCESS:
    case constants.PROFILE_IMAGE_UPDATE_SUCCESS:
      return {
        ...state,
        status: statuses.profileStatusIdle(),
      };

    case constants.PROFILE_FETCH_FAILURE:
    case constants.PROFILE_UPDATE_FAILURE:
    case constants.PROFILE_IMAGE_UPDATE_FAILURE:
      return {
        ...state,
        status: statuses.profileStatusError(),
      };

    default:
      return state;
  }
};

export default profile;
