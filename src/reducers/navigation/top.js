import * as routes from 'src/constants/routes';
import * as sync from 'src/constants/sync';
import * as landing from 'src/constants/landing';
import * as entry from 'src/constants/entry';
import * as navigation from 'src/constants/navigation';
import * as onboarding from 'src/constants/onboarding';
import * as notifications from 'src/constants/notifications';
import * as calls from 'src/constants/calls';


import {
  push,
  pop,
  replaceAt,
  createStack,
  createRoute,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_LANDING),
]), action) => {
  switch (action.type) {
    case navigation.SCREEN_DISMISS:
      return pop(state);

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

    case sync.LOAD_SUCCESS: {
      const route = createRoute(routes.ROUTE_NAVIGATOR);
      return replaceAt(state, routes.ROUTE_LOADING, route);
    }

    case sync.LOAD_FAILURE: {
      const route = createRoute(routes.ROUTE_LOADING_FAILURE);
      return replaceAt(state, routes.ROUTE_LOADING, route);
    }

    case notifications.CALL_STARTING_1_MIN_NOTIFICATION_RECEIVED: {
      const { payload: { objectId: scheduledCallId } } = action;
      return push(state, createRoute(routes.ROUTE_START_CALL, { scheduledCallId }));
    }

    case calls.CALL_CREATE_REQUEST: {
      const route = createRoute(routes.ROUTE_CONNECTING_CALL);
      return replaceAt(state, routes.ROUTE_START_CALL, route);
    }

    case calls.CALL_CREATE_FAILURE: {
      const route = createRoute(routes.ROUTE_CONNECTING_CALL_FAILURE);
      return replaceAt(state, routes.ROUTE_CONNECTING_CALL, route);
    }

    default:
      return state;
  }
};
