import { NavigationExperimental } from 'react-native';
const { StateUtils: NavigationStateUtils } = NavigationExperimental;

import * as constants from 'src/navigation/constants';
import ROUTES_ACTIONS from 'src/navigation/routes/actions';


const navigation = (state = {
  index: 0,
  routes: [
    { key: constants.ROUTE_ONBOARDING_PROFILE_PICTURE },
  ],
}, action) => {
  if (action.type in ROUTES_ACTIONS) {
    return navigation(state, ROUTES_ACTIONS[action.type]());
  }


  switch (action.type) {
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
