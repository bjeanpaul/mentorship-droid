import { includes } from 'lodash';
import * as routes from 'src/constants/routes';
import * as auth from 'src/constants/auth';
import * as sync from 'src/constants/sync';
import * as landing from 'src/constants/landing';
import * as entry from 'src/constants/entry';
import * as navigation from 'src/constants/navigation';
import * as onboarding from 'src/constants/onboarding';
import * as notifications from 'src/constants/notifications';
import * as calls from 'src/constants/calls';
import * as callNotes from 'src/constants/callNote';
import * as schedule from 'src/constants/schedule';
import * as activities from 'src/constants/activities';
import * as profile from 'src/constants/profile';
import * as errors from 'src/constants/errors';


import {
  push,
  pop,
  inject,
  replaceOrPush,
  createStack,
  createRoute,
  remove,
  topOf,
} from 'src/navigationHelpers';


const popEphemeral = state => includes(routes.EPHEMERAL_ROUTES, topOf(state).key)
  ? pop(state)
  : state;


export const createInitialState = () => createStack([
  createRoute(routes.ROUTE_LANDING),
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
      return replaceOrPush(state, routes.ROUTE_LOADING, route);
    }

    case sync.LOAD_FAILURE: {
      const route = createRoute(routes.ROUTE_LOADING_FAILURE);
      return replaceOrPush(state, routes.ROUTE_LOADING, route);
    }

    case notifications.CALL_STARTING_1_MIN_RECEIVED: {
      const { payload: { objectId: scheduledCallId } } = action;
      return push(state, createRoute(routes.ROUTE_START_CALL, { scheduledCallId }));
    }

    case schedule.SCHEDULED_CALL_START: {
      const { payload: { scheduledCallId } } = action;
      return push(state, createRoute(routes.ROUTE_START_CALL, { scheduledCallId }));
    }

    case notifications.CALL_ENDED_RECEIVED: {
      const { payload: { objectId: callId } } = action;
      const route = createRoute(routes.ROUTE_CALL_COMPLETED, { callId });
      return replaceOrPush(state, routes.ROUTE_CONNECTING_CALL, route);
    }

    case calls.CALL_CREATE_REQUEST: {
      const route = createRoute(routes.ROUTE_CONNECTING_CALL);
      return replaceOrPush(state, routes.ROUTE_START_CALL, route);
    }

    case calls.CALL_CREATE_FAILURE: {
      const route = createRoute(routes.ROUTE_CONNECTING_CALL_FAILURE);
      return replaceOrPush(state, routes.ROUTE_CONNECTING_CALL, route);
    }

    case calls.CALL_OPEN: {
      return push(state, createRoute(routes.ROUTE_START_CALL));
    }

    case callNotes.CALL_NOTE_CREATE_OPEN: {
      const { payload: { callId } } = action;
      const route = createRoute(routes.ROUTE_CREATE_CALL_NOTES, { callId });
      return replaceOrPush(state, routes.ROUTE_CALL_COMPLETED, route);
    }

    case callNotes.CALL_NOTE_CREATE_SUCCESS: {
      const route = createRoute(routes.ROUTE_CALL_NOTE_SAVED);
      return replaceOrPush(state, routes.ROUTE_CREATE_CALL_NOTES, route);
    }

    case activities.ACTIVITY_SCHEDULE_CALL: {
      const { payload: { activityId } } = action;
      return push(state, createRoute(routes.ROUTE_SCHEDULE_CALL, { activityId }));
    }

    case schedule.SCHEDULED_CALL_ADD: {
      const { payload: { date } } = action;
      const route = createRoute(routes.ROUTE_SCHEDULE_CALL, { date });
      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_OPEN: {
      const { payload: { scheduledCallId } } = action;
      const route = createRoute(routes.ROUTE_SCHEDULE_CALL, { scheduledCallId });
      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_ACTIVITY_CHANGE: {
      const route = createRoute(routes.ROUTE_SCHEDULED_CALL_CATEGORY);
      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_CATEGORY_CHOOSE: {
      const { payload: { categoryId } } = action;
      return push(state, createRoute(routes.ROUTE_SCHEDULED_CALL_ACTIVITY, { categoryId }));
    }

    case schedule.SCHEDULED_CALL_ACTIVITY_CHOOSE: {
      const { payload: { activityId } } = action;

      let newState = state;
      newState = pop(pop(newState));
      newState = inject(newState, routes.ROUTE_SCHEDULE_CALL, { activityId });

      return newState;
    }

    case schedule.SCHEDULED_CALL_ACTIVITY_REMOVE: {
      return inject(state, routes.ROUTE_SCHEDULE_CALL, { activityId: null });
    }

    case schedule.SCHEDULED_CALL_PATCH_REQUEST:
    case schedule.SCHEDULED_CALL_CREATE_REQUEST: {
      const route = createRoute(routes.ROUTE_SCHEDULING_CALL);
      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_PATCH_FAILURE:
    case schedule.SCHEDULED_CALL_CREATE_FAILURE: {
      const route = createRoute(routes.ROUTE_CALL_SCHEDULE_FAILURE);
      return replaceOrPush(state, routes.ROUTE_SCHEDULING_CALL, route);
    }

    case schedule.SCHEDULED_CALL_PATCH_SUCCESS:
    case schedule.SCHEDULED_CALL_CREATE_SUCCESS: {
      const route = createRoute(routes.ROUTE_CALL_SCHEDULED);
      const newState = remove(state, routes.ROUTE_SCHEDULE_CALL);
      return replaceOrPush(newState, routes.ROUTE_SCHEDULING_CALL, route);
    }

    case profile.PROFILE_SETTINGS_OPEN:
      return push(state, createRoute(routes.ROUTE_PROFILE_SETTINGS));

    default:
      return state;
  }
};
