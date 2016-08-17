import { arrayOf } from 'normalizr';
import request, { imageData } from 'src/api/request';
import { Profile } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listProfiles = auth => request({
  url: '/profile/',
  method: 'GET',
  schema: arrayOf(Profile),
  params: { email: auth.email },
  parse: parseResults,
  auth,
});


export const createProfile = (data, auth) => request({
  url: `/profile/`,
  method: 'POST',
  data,
  auth,
});


export const getProfile = (id, auth) => request({
  url: `/profile/${id}/`,
  method: 'GET',
  schema: Profile,
  auth,
});


export const updateProfile = (id, data, auth) => request({
  url: `/profile/${id}/`,
  method: 'PUT',
  data,
  auth,
});


export const removeProfile = (id, auth) => request({
  url: `/profile/${id}/`,
  method: 'DELETE',
  auth,
});


export const uploadProfileImage = (id, path, auth) => request({
  url: `/profile/${id}/image/`,
  method: 'PUT',
  auth,
  data: imageData({
    path,
    name: 'rar.png',
    type: 'image/png',
  }),
});
