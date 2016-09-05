import { unary } from 'lodash';
import * as routes from 'src/constants/routes';
import * as landing from 'src/constants/landing';
import * as navigation from 'src/constants/navigation';
import * as entry from 'src/constants/entry';
import * as onboarding from 'src/constants/onboarding';
import * as sync from 'src/constants/sync';
import * as activities from 'src/constants/activities';


import {
  push,
  popCurrent,
  back,
  forward,
  insertAfterCurrent,
  pushList,
  createRoute,
} from 'src/navigationHelpers';


const navigationReducer = (state = {
  index: 0,
  routes: [createRoute(routes.ROUTE_LANDING)],
}, action) => {
  switch (action.type) {
    case navigation.NAVIGATE_BACK_REQUEST:
      return back(state);

    case navigation.NAVIGATE_FORWARD_REQUEST:
      return forward(state);

    case navigation.SCREEN_DISMISS:
      return popCurrent(state);

    case landing.SHOW_ACTIVATION_REQUEST:
      return push(state, createRoute(routes.ROUTE_AUTH_ACTIVATION));

    case landing.SHOW_LOGIN_REQUEST:
      return push(state, createRoute(routes.ROUTE_AUTH_LOGIN));

    case entry.NEW_USER_ENTER:
      return push(state, createRoute(routes.ROUTE_ONBOARDING_WELCOME));

    case sync.LOAD_REQUEST:
      return push(state, createRoute(routes.ROUTE_LOADING));

    case sync.LOAD_SUCCESS:
      return push(state, createRoute(routes.ROUTE_JOURNEY));

    case onboarding.ONBOARDING_START_PROFILE:
      return pushList(state, routes.ONBOARDING_STEPS.map(unary(createRoute)));

    case onboarding.ONBOARDING_CHOOSE_PROFILE_PICTURE:
      return insertAfterCurrent(state, createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL));

    case onboarding.ONBOARDING_UPDATE_PROFILE_PICTURE:
      return popCurrent(state);

    case activities.CATEGORY_CHOOSE: {
      const { payload: { categoryId } } = action;
      return push(state, createRoute(routes.ROUTE_CATEGORY, { categoryId }));
    }

    case activities.ACTIVITY_CHOOSE: {
      const { payload: { activityId } } = action;
      return push(state, createRoute(routes.ROUTE_ACTIVITY, { activityId }));
    }

    case activities.ACTIVITY_SCHEDULE_CALL: {
      const { payload: { activityId } } = action;
      return push(state, createRoute(routes.ROUTE_SCHEDULE_CALL, { activityId }));
    }

    default:
      return state;
  }
};


export default navigationReducer;
