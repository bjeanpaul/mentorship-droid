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
    profilePicture: path,
  },
});


const changeProfile = (payload) => ({
  type: constants.ONBOARDING_CHANGE_PROFILE,
  payload,
});


const updateProfile = apiAction({
  method: api.updateProfile,
  request: staticAction(constants.ONBOARDING_UPDATE_PROFILE_REQUEST),
  success: dataAction(constants.ONBOARDING_UPDATE_PROFILE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.ONBOARDING_UPDATE_PROFILE_FAILURE)]],
});


const updateProfilePicture = apiAction({
  method: api.updateProfilePicture,
  request: staticAction(constants.ONBOARDING_UPDATE_IMAGE_REQUEST),
  success: dataAction(constants.ONBOARDING_UPDATE_IMAGE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.ONBOARDING_UPDATE_IMAGE_FAILURE)]],
});


const save = ({ id, profile }) => dispatch => Promise.resolve()
  .then(() => updateProfilePicture(id, profile.profilePicture))
  .then(dispatch)
  .then(() => updateProfile(id, profile))
  .then(dispatch);


const stepBack = () => ({
  type: constants.ONBOARDING_STEP_BACK_REQUEST,
});


const stepForward = () => ({
  type: constants.ONBOARDING_STEP_FORWARD_REQUEST,
});


export {
  stepBack,
  stepForward,
  save,
  changeProfile,
  changeProfilePicture,
  chooseProfilePicture,
};
