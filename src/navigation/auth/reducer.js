import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;
import * as constants from './constants';

const auth = (state = {
  index: 0,
  routes: [
    { key: constants.ROUTE_AUTH_LANDING },
  ],
}, action) => {
  switch (action.type) {
    case constants.NAVIGATION_AUTH_PUSH:
      if (!NavigationStateUtils.has(state, action.payload.key)) {
        return NavigationStateUtils.push(state, action.payload);
      }
      return state;
    case constants.NAVIGATION_AUTH_POP:
      return NavigationStateUtils.pop(state);
    default:
      return state;
  }
};

export default auth;
