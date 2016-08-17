import { arrayOf } from 'normalizr';
import request, { imageData } from 'src/api/request';
import { Profile } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';


export const listProfiles = auth => request({
  url: '/profile',
  schema: arrayOf(Profile),
  params: { email: auth.email },
  parse: parseResults,
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
