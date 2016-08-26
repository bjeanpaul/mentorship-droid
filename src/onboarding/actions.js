import * as constants from 'src/onboarding/constants';

export const changeProfileImage = path => ({
  type: constants.ONBOARDING_CHANGE_PROFILE,
  payload: {
    profilePicture: path,
  },
});
