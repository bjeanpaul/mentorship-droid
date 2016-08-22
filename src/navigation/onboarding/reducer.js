import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;
import * as constants from './constants';

const onboarding = (state = {
  index: 0,
  routes: [
    { key: constants.ONBOARDING_ROUTE_HELLO },
  ],
}, action) => {
  switch (action.type) {
    case constants.ONBOARDING_NAVIGATION_PUSH:
      if (!NavigationStateUtils.has(state, action.payload.key)) {
        return NavigationStateUtils.push(state, action.payload);
      }
      return state;
    case constants.ONBOARDING_NAVIGATION_POP:
      return NavigationStateUtils.pop(state);
    default:
      return state;
  }
};

export default onboarding;
