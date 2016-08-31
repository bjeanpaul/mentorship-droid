import * as constants from 'src/constants/onboarding';


export const updateProfileImage = path => ({
  type: constants.ONBOARDING_UPDATE_PROFILE_PICTURE,
  payload: {
    profilePicture: path,
  },
});


export const updateProfile = (payload) => ({
  type: constants.ONBOARDING_UPDATE_PROFILE,
  payload,
});
