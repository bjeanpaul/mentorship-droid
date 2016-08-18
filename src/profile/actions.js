import { trap } from 'src/helpers';
import * as api from 'src/api';
import * as constants from 'src/profile/constants';

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


const uploadProfileImage = apiAction({
  method: api.uploadProfileImage,
  request: staticAction(constants.PROFILE_IMAGE_UPDATE_REQUEST),
  success: staticAction(constants.PROFILE_IMAGE_UPDATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.PROFILE_IMAGE_UPDATE_FAILURE)]],
});


export {
  fetchProfile,
  updateProfile,
  uploadProfileImage,
};
