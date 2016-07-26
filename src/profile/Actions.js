//import { NativeModules } from 'react-native';

import { generateActionCreators } from 'src/helpers';
import { normalize, Schema, arrayOf } from 'normalizr';
import actionTypes from './Constants';


const profileSchema = new Schema('profile');

const actions = generateActionCreators({
  path: 'profile',
  actionTypes,
  normalizeJSON: ({ json }) => {
    if (json.results) {
      return normalize(json.results, arrayOf(profileSchema));
    }
    return normalize(json, profileSchema);
  },
});

const imageActions = generateActionCreators({
  path: 'profile', // profile/{id}/image/
  actionTypes: actionTypes.image,
})

const uploadImage = (path, onSuccess) => {

  const image = require(path);

  //console.log(image);
  // NativeModules.ReadImageData.readImage(path, (image) => {
  //   console.log('pew');
  // })
}

export default {
  fetch: actions.fetch,
  update: actions.update,
  uploadImage,
};
