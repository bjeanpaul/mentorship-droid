import * as api from 'src/api';
import * as constants from 'src/constants/onboarding';
import ImagePicker from 'react-native-image-picker';

import {
  apiAction,
  staticAction,
  dataAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


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


const choosePicture = profilePictureUploadPath => ({
  type: constants.ONBOARDING_PICTURE_CHOSEN,
  payload: {
    profilePictureUploadPath,
  },
});


const openPicturePicker = () => dispatch => {
  ImagePicker.showImagePicker({}, resp => {
    if (resp.uri) dispatch(choosePicture(resp.uri));
  });
};


export {
  setupProfile,
  changeProfile,
  choosePicture,
  openPicturePicker,
};
