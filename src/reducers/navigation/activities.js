import * as routes from 'src/constants/routes';
import * as activities from 'src/constants/activities';


import {
  pop,
  push,
  createStack,
  createRoute,
} from 'src/navigationHelpers';


export default (state = createStack([
  createRoute(routes.ROUTE_CATEGORY_LIST),
]), action) => {
  switch (action.type) {
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

    case activities.ACTIVITY_SCREEN_DISMISS:
      return pop(state);

    default:
      return state;
  }
};
