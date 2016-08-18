import * as NavigationStateUtils from 'NavigationStateUtils';

import {
  NAVIGATION_AUTH_PUSH,
  NAVIGATION_AUTH_POP,
  ROUTE_AUTH_LANDING,
} from './constants';

const auth = (state = {
  index: 0,
  routes: [
    { key: ROUTE_AUTH_LANDING },
  ],
}, action) => {
  switch (action.type) {
    case NAVIGATION_AUTH_PUSH:
      return NavigationStateUtils.push(state, action.payload);
    case NAVIGATION_AUTH_POP:
      return NavigationStateUtils.pop(state);
    default:
      return state;
  }
};

export default auth;
