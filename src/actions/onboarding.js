import * as api from 'src/api';
import * as constants from 'src/constants/onboarding';

import {
  apiAction,
  staticAction,
  dataAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


const chooseProfilePicture = () => ({
  type: constants.ONBOARDING_CHOOSE_PROFILE_PICTURE,
});


const changeProfilePicture = path => ({
  type: constants.ONBOARDING_CHANGE_PROFILE_PICTURE,
  payload: {
    profilePictureUploadPath: path,
  },
});


const changeProfile = (payload) => ({
  type: constants.ONBOARDING_CHANGE_PROFILE,
  payload,
});


const setupProfile = apiAction({
  method: api.setupProfile,
  request: staticAction(constants.ONBOARDING_SETUP_PROFILE_REQUEST),
  success: dataAction(constants.ONBOARDING_SETUP_PROFILE_SUCCESS),
  failures: [[
    ApiResponseError, staticAction(constants.ONBOARDING_SETUP_PROFILE_FAILURE),
  ]],
});


export {
  setupProfile,
  changeProfile,
  changeProfilePicture,
  chooseProfilePicture,
};
