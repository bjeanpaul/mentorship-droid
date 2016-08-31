import * as constants from 'src/constants/onboarding';


const onboarding = (state = {}, action) => {
  switch (action.type) {

    case constants.ONBOARDING_UPDATE_PROFILE_PICTURE:
    case constants.ONBOARDING_UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default onboarding;
