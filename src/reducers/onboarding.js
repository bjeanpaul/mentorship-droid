import { combineReducers } from 'redux';


import { NavigationExperimental } from 'react-native';
const { StateUtils: NavigationStateUtils } = NavigationExperimental;

import * as constants from 'src/constants/onboarding';


const makeStepperNavigationReducer = ({ FORWARD, BACK }) => (state = {
  index: 0,
  routes: [
    { key: 'STEP_0' },
  ],
}, action) => {
  switch (action.type) {
    case FORWARD:
      return NavigationStateUtils.push(state, {
        key: `STEP_${state.index + 1}`,
      });

    case BACK:
      return NavigationStateUtils.pop(state);

    default:
      return state;
  }
};

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
