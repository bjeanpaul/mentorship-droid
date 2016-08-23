import * as constants from 'src/onboarding/constants';
import { popRoute } from 'src/navigation/actions';

export const changeProfileImage = path => ({
  type: constants.ONBOARDING_CHANGE_PROFILE,
  payload: {
    profilePicture: path,
  },
});

export const changeProfileImageAndPreview = path => dispatch => Promise.resolve()
  .then(() => changeProfileImage(path))
  .then(dispatch)
  .then(popRoute)
  .then(dispatch);
