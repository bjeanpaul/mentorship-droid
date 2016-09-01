import { combineReducers } from 'redux';
import { makeStepperNavigationReducer } from 'src/navigationHelpers';

import * as constants from 'src/constants/onboarding';

const navigation = makeStepperNavigationReducer({
  FORWARD: constants.ONBOARDING_STEP_FORWARD_REQUEST,
  BACK: constants.ONBOARDING_STEP_BACK_REQUEST,
});


const profile = (state = {}, action) => {
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


export default combineReducers({
  navigation,
  profile,
});
