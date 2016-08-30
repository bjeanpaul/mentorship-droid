import * as constants from 'src/constants/onboarding';


const onboarding = (state = {}, action) => {
  switch (action.type) {

    case constants.ONBOARDING_CHANGE_PROFILE:
      return {
        ...state,
        profilePicture: action.payload.profilePicture,
      };

    default:
      return state;
  }
};

export default onboarding;
