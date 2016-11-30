import * as routes from 'src/constants/routes';
import * as activities from 'src/constants/activities';
import { push, pop, createRoute } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case activities.CATEGORY_CHOOSE: {
      const { payload: { categoryId } } = action;
      return push(state, createRoute(routes.ROUTE_CATEGORY, { categoryId }));
    }

    case activities.ACTIVITY_CHOOSE: {
      const { payload: { activityId } } = action;
      return push(state, createRoute(routes.ROUTE_ACTIVITY, { activityId }));
    }

    case activities.ACTIVITY_SCREEN_DISMISS:
      return pop(state);

    case activities.ACTIVITY_SCHEDULE_CALL: {
      const { payload: { activityId } } = action;
      return push(state, createRoute(routes.ROUTE_SCHEDULE_CALL, { activityId }));
    }

    case activities.ACTIVITY_CALL_NOTES_VIEW: {
      const { payload: { activityId } } = action;
      return push(state, createRoute(routes.ROUTE_CALL_NOTE_LIST, { activityId }));
    }

    default:
      return state;
  }
};
