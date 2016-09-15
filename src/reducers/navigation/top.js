import * as routes from 'src/constants/routes';
import * as sync from 'src/constants/sync';
import * as landing from 'src/constants/landing';
import * as entry from 'src/constants/entry';
import * as onboarding from 'src/constants/onboarding';


import {
  push,
  pop,
  createStack,
  createRoute,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_LANDING),
]), action) => {
  switch (action.type) {
    case landing.SHOW_ACTIVATION_REQUEST:
      return push(state, createRoute(routes.ROUTE_AUTH_ACTIVATION));

    case landing.SHOW_LOGIN_REQUEST:
      return push(state, createRoute(routes.ROUTE_AUTH_LOGIN));

    case entry.NEW_USER_ENTER:
      return push(state, createRoute(routes.ROUTE_ONBOARDING));

    case onboarding.ONBOARDING_CHOOSE_PROFILE_PICTURE:
      return push(state, createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL));

    case onboarding.ONBOARDING_CHANGE_PROFILE_PICTURE:
      return pop(state);

    case sync.LOAD_REQUEST:
      return push(state, createRoute(routes.ROUTE_LOADING));

    case sync.LOAD_SUCCESS:
      return push(state, createRoute(routes.ROUTE_NAVIGATOR));

    default:
      return state;
  }
};
