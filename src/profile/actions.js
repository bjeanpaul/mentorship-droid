import { trap } from 'src/helpers';
import { ApiResponseError } from 'src/api';
import { uploadProfileImage as apiUploadProfileImage } from 'src/api';

import {
  PROFILE_IMAGE_UPDATE_REQUEST,
  PROFILE_IMAGE_UPDATE_SUCCESS,
  PROFILE_IMAGE_UPDATE_FAILURE,
} from 'src/profile/constants';


const uploadProfileImageRequest = () => ({
  type: PROFILE_IMAGE_UPDATE_REQUEST,
});


const uploadProfileImageSuccess = () => ({
  type: PROFILE_IMAGE_UPDATE_SUCCESS,
});


const uploadProfileImageFailure = () => ({
  type: PROFILE_IMAGE_UPDATE_FAILURE,
});


const uploadProfileImage = (id, path) => (dispatch, { auth }) => Promise.resolve()
  .then(() => uploadProfileImageRequest())
  .then(dispatch)
  .then(() => apiUploadProfileImage(id, path, auth))
  .then(uploadProfileImageSuccess, trap(ApiResponseError, uploadProfileImageFailure))
  .then(dispatch);


export {
  uploadProfileImage,
};
