import { combineReducers } from 'redux';

import * as constants from 'src/constants/onboarding';


const profile = (state = {}, action) => {
  switch (action.type) {
    case constants.ONBOARDING_CHANGE_PROFILE_PICTURE:
    case constants.ONBOARDING_CHANGE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};


export default combineReducers({
  profile,
});
