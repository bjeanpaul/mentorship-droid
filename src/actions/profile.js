import * as api from 'src/api';
import * as constants from 'src/constants/profile';

import {
  apiAction,
  dataAction,
  staticAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


const fetchProfile = apiAction({
  method: api.getProfile,
  request: staticAction(constants.PROFILE_FETCH_REQUEST),
  success: dataAction(constants.PROFILE_FETCH_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.PROFILE_FETCH_FAILURE)]],
});


const updateProfile = apiAction({
  method: api.updateProfile,
  request: staticAction(constants.PROFILE_UPDATE_REQUEST),
  success: staticAction(constants.PROFILE_UPDATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.PROFILE_UPDATE_FAILURE)]],
});


const updateProfilePicture = apiAction({
  method: api.updateProfilePicture,
  request: staticAction(constants.PROFILE_IMAGE_UPDATE_REQUEST),
  success: staticAction(constants.PROFILE_IMAGE_UPDATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.PROFILE_IMAGE_UPDATE_FAILURE)]],
});


const openProfileSettings = staticAction(constants.PROFILE_SETTINGS_OPEN);


export {
  fetchProfile,
  openProfileSettings,
  updateProfile,
  updateProfilePicture,
};
