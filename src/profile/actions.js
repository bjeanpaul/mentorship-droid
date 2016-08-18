import { trap } from 'src/helpers';
import * as api from 'src/api';
import * as constants from 'src/profile/constants';

const { ApiResponseError } = api;


const fetchProfileRequest = () => ({
  type: constants.PROFILE_FETCH_REQUEST,
});


const fetchProfileSuccess = data => ({
  type: constants.PROFILE_FETCH_SUCCESS,
  payload: data,
});


const fetchProfileFailure = () => ({
  type: constants.PROFILE_FETCH_FAILURE,
});


const fetchProfile = id => (dispatch, { auth }) => Promise.resolve()
  .then(() => fetchProfileRequest())
  .then(dispatch)
  .then(() => api.getProfile(id, auth))
  .then(fetchProfileSuccess, trap(ApiResponseError, fetchProfileFailure))
  .then(dispatch);


const updateProfileRequest = () => ({
  type: constants.PROFILE_UPDATE_REQUEST,
});


const updateProfileSuccess = () => ({
  type: constants.PROFILE_UPDATE_SUCCESS,
});


const updateProfileFailure = () => ({
  type: constants.PROFILE_UPDATE_FAILURE,
});


const updateProfile = (id, data) => (dispatch, { auth }) => Promise.resolve()
  .then(() => updateProfileRequest())
  .then(dispatch)
  .then(() => api.updateProfile(id, data, auth))
  .then(updateProfileSuccess, trap(ApiResponseError, updateProfileFailure))
  .then(dispatch);


const uploadProfileImageRequest = () => ({
  type: constants.PROFILE_IMAGE_UPDATE_REQUEST,
});


const uploadProfileImageSuccess = () => ({
  type: constants.PROFILE_IMAGE_UPDATE_SUCCESS,
});


const uploadProfileImageFailure = () => ({
  type: constants.PROFILE_IMAGE_UPDATE_FAILURE,
});


const uploadProfileImage = (id, path) => (dispatch, { auth }) => Promise.resolve()
  .then(() => uploadProfileImageRequest())
  .then(dispatch)
  .then(() => api.uploadProfileImage(id, path, auth))
  .then(uploadProfileImageSuccess, trap(ApiResponseError, uploadProfileImageFailure))
  .then(dispatch);


export {
  fetchProfile,
  updateProfile,
  uploadProfileImage,
};
