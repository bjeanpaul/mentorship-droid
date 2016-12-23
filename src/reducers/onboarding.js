import { combineReducers } from 'redux';

import * as constants from 'src/constants/onboarding';
import { AUTH_LOGOUT } from 'src/constants/auth';


export const createInitialState = () => ({
});


const profile = (state = createInitialState(), action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return createInitialState();

    case constants.ONBOARDING_PICTURE_CHOSEN:
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
