import { NavigationExperimental } from 'react-native';
const { StateUtils: NavigationStateUtils } = NavigationExperimental;
import * as constants from './constants';

import { AUTH_LOGIN_SUCCESS } from 'src/auth/constants';
import { ONBOARDING_CHANGE_PROFILE } from 'src/onboarding/constants';

const mapActionToNavigationAction = {};
mapActionToNavigationAction[AUTH_LOGIN_SUCCESS] = {
  type: constants.NAVIGATION_PUSH,
  payload: {
    key: constants.ROUTE_ONBOARDING_WELCOME,
  },
};
mapActionToNavigationAction[ONBOARDING_CHANGE_PROFILE] = {
  type: constants.NAVIGATION_POP,
  payload: {
    key: constants.ROUTE_ONBOARDING_PROFILE_PICTURE,
  },
};


const navigation = (state = {
  index: 0,
  routes: [
    { key: constants.ROUTE_LANDING },
  ],
}, action) => {
  if (action.type in mapActionToNavigationAction) {
    return navigation(state, mapActionToNavigationAction[action.type]);
  }

  switch (action.type) {
    case constants.NAVIGATION_REPLACE:
      return NavigationStateUtils.replace(state, action.payload);

    case constants.NAVIGATION_PUSH:
      if (!NavigationStateUtils.has(state, action.payload.key)) {
        return NavigationStateUtils.push(state, action.payload);
      }
      return state;

    case constants.NAVIGATION_POP:
      return NavigationStateUtils.pop(state);

    default:
      return state;
  }
};

export default navigation;
