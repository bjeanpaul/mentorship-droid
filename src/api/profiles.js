import { every, pick, isNull } from 'lodash';
import { arrayOf } from 'normalizr';
import request, { imageData } from 'src/api/request';
import { Profile } from 'src/api/schemas';
import { parseProfile, parseProfileListResults } from 'src/api/parse';
import { REQUIRED_PROFILE_FIELDS } from 'src/constants/profile';


export const listProfiles = (auth, params = {}) => request({
  url: '/profile/',
  method: 'GET',
  schema: arrayOf(Profile),
  parse: parseProfileListResults,
  params,
  auth,
});


export const getProfile = (id, auth) => request({
  url: `/profile/${id}/`,
  method: 'GET',
  schema: Profile,
  parse: parseProfile,
  auth,
});


export const updateProfile = (id, data, auth) => request({
  url: `/profile/${id}/`,
  method: 'PUT',
  schema: Profile,
  parse: parseProfile,
  data,
  auth,
});


export const removeProfile = (id, auth) => request({
  url: `/profile/${id}/`,
  method: 'DELETE',
  auth,
});


export const updateProfilePicture = (id, path, auth) => request({
  url: `/profile/${id}/image/`,
  method: 'PUT',
  auth,
  data: imageData({ path }),
});


export const setupProfile = async (id, data, auth) => {
  await updateProfilePicture(id, data.profilePictureUploadPath, auth);
  return updateProfile(id, pick(data, REQUIRED_PROFILE_FIELDS), auth);
};


export const profileIsComplete = profile => every(
  pick(profile, REQUIRED_PROFILE_FIELDS),
  v => v !== '' && typeof v !== 'undefined' && !isNull(v));
