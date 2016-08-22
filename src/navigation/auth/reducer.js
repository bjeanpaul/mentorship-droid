import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;
import * as constants from './constants';

const auth = (state = {
  index: 0,
  routes: [
    { key: constants.AUTH_ROUTE_LANDING },
  ],
}, action) => {
  switch (action.type) {
    case constants.AUTH_NAVIGATION_PUSH:
      if (!NavigationStateUtils.has(state, action.payload.key)) {
        return NavigationStateUtils.push(state, action.payload);
      }
      return state;
    case constants.AUTH_NAVIGATION_POP:
      return NavigationStateUtils.pop(state);
    default:
      return state;
  }
};

export default auth;
