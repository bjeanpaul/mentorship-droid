import { trap } from 'src/helpers';
import * as api from 'src/api';

import {
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAILURE,

  PROFILE_IMAGE_UPDATE_REQUEST,
  PROFILE_IMAGE_UPDATE_SUCCESS,
  PROFILE_IMAGE_UPDATE_FAILURE,
} from 'src/profile/constants';

const { ApiResponseError } = api;


const fetchProfileRequest = () => ({
  type: PROFILE_FETCH_REQUEST,
});


const fetchProfileSuccess = entities => ({
  type: PROFILE_FETCH_SUCCESS,
  payload: { entities },
});


const fetchProfileFailure = () => ({
  type: PROFILE_FETCH_FAILURE,
});


const fetchProfile = id => (dispatch, { auth }) => Promise.resolve()
  .then(() => fetchProfileRequest())
  .then(dispatch)
  .then(() => api.getProfile(id, auth))
  .then(fetchProfileSuccess, trap(ApiResponseError, fetchProfileFailure))
  .then(dispatch);


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
  .then(() => api.uploadProfileImage(id, path, auth))
  .then(uploadProfileImageSuccess, trap(ApiResponseError, uploadProfileImageFailure))
  .then(dispatch);


export {
  fetchProfile,
  uploadProfileImage,
};
