import * as constants from 'src/profile/constants';
import * as statuses from 'src/profile/statuses';

export const getProfile = (state, profileId) => {
  if (!profileId) return {};

  const {
    first_name: firstName,
  } = state.entities.profiles[profileId] || {};

  return {
    firstName,
  };
};


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
