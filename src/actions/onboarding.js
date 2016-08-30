import * as constants from 'src/constants/onboarding';

export const changeProfileImage = path => ({
  type: constants.ONBOARDING_CHANGE_PROFILE,
  payload: {
    profilePicture: path,
  },
});


export const updateProfile = (payload) => ({
  type: constants.ONBOARDING_CHANGE_PROFILE,
  payload,
});
