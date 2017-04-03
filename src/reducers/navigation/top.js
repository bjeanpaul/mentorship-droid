import { includes } from 'lodash';
import { pipeline } from 'src/helpers';

import * as routes from 'src/constants/routes';
import * as auth from 'src/constants/auth';
import * as sync from 'src/constants/sync';
import * as landing from 'src/constants/landing';
import * as entry from 'src/constants/entry';
import * as navigation from 'src/constants/navigation';
import * as profile from 'src/constants/profile';
import * as errors from 'src/constants/errors';

import reduceCalls from 'src/reducers/navigation/calls';
import reduceCallNotes from 'src/reducers/navigation/callNotes';
import reduceOnboarding from 'src/reducers/navigation/onboarding';
import reduceActivities from 'src/reducers/navigation/activities';
import reduceSchedule from 'src/reducers/navigation/schedule';
import reduceBlogPosts from 'src/reducers/navigation/blogPosts';


import {
  push,
  pop,
  replaceOrPush,
  createStack,
  createRoute,
  topOf,
} from 'src/navigationHelpers';


const popEphemeral = state => includes(routes.EPHEMERAL_ROUTES, topOf(state).key)
  ? pop(state)
  : state;


export const createInitialState = () => createStack([
  createRoute(routes.ROUTE_LANDING),
]);


const reduce = pipeline([
  reduceCalls,
  reduceCallNotes,
  reduceOnboarding,
  reduceActivities,
  reduceSchedule,
  reduceBlogPosts,
]);


export default (state = createInitialState(), action) => {
  switch (action.type) {
    case auth.AUTH_LOGOUT:
      return createInitialState();

    case navigation.SCREEN_DISMISS:
      return pop(state);

    case errors.API_ERROR:
      return push(popEphemeral(state), createRoute(routes.ROUTE_API_ERROR));

    case errors.NETWORK_ERROR:
      return push(popEphemeral(state), createRoute(routes.ROUTE_NETWORK_ERROR));

    case landing.ACTIVATION_SHOW:
      return push(state, createRoute(routes.ROUTE_AUTH_ACTIVATION));

    case landing.LOGIN_SHOW:
      return push(state, createRoute(routes.ROUTE_AUTH_LOGIN));

    case entry.NEW_USER_ENTER:
      return push(state, createRoute(routes.ROUTE_ONBOARDING));

    case sync.LOAD_REQUEST: {
      const route = createRoute(routes.ROUTE_LOADING);
      return replaceOrPush(state, routes.ROUTE_ONBOARDING_SAVING, route);
    }

    case sync.LOAD_SUCCESS: {
      const route = createRoute(routes.ROUTE_NAVIGATOR);
      return replaceOrPush(state, routes.ROUTE_LOADING, route);
    }

    case sync.LOAD_FAILURE: {
      const route = createRoute(routes.ROUTE_LOADING_FAILURE);
      return replaceOrPush(state, routes.ROUTE_LOADING, route);
    }

    case profile.PROFILE_SETTINGS_OPEN:
      return push(state, createRoute(routes.ROUTE_PROFILE_SETTINGS));

    default:
      return reduce(state, action);
  }
};
