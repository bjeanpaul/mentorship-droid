import { normalize, Schema, arrayOf } from 'normalizr';
import { generateActionCreators } from 'src/helpers';
import { getBaseURL, getAuthorizationToken } from 'src/configuration';

import actionTypes from './Constants';

// TODO: Create an action to fetch our own profile.

const profileSchema = new Schema('profile');

const actions = generateActionCreators({
  resourcePath: 'profile',
  actionTypes,
  normalizeJSON: ({ json }) => {
    if (json.results) {
      return normalize(json.results, arrayOf(profileSchema));
    }
    return normalize(json, profileSchema);
  },
});


const uploadImage = (path, onSuccess, onFailure) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.image.updateRequest,
  });

  const formData = new FormData();
  formData.append('image', {
    uri: path,
    name: 'image.jpg',
    type: 'image/png',
  });

  const request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
      return;
    }
    if (request.status === 201) {
      dispatch({
        type: actionTypes.image.updateSuccess,
      });
      if (onSuccess) {
        onSuccess();
      }
    } else {
      console.warn('error uploading image', e);
      dispatch({
        type: actionTypes.image.updateFailure,
      });
      if (onFailure) {
        onFailure();
      }
    }
  };

  request.open('PUT', `${getBaseURL()}/profile/1/image/`);
  request.setRequestHeader('Authorization', `Basic ${getAuthorizationToken(getState())}`);
  request.send(formData);
};


export default {
  fetch: actions.fetch,
  update: actions.update,
  uploadImage,
};
