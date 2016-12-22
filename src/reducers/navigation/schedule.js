import moment from 'moment';
import * as schedule from 'src/constants/schedule';
import * as routes from 'src/constants/routes';

import {
  push,
  pop,
  inject,
  replaceOrPush,
  createRoute,
  remove,
} from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case schedule.SCHEDULED_CALL_ADD: {
      const { payload: { date } } = action;
      const route = createRoute(routes.ROUTE_SCHEDULE_CALL, { date });
      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_ADD_NEXT: {
      const { payload: { date } } = action;

      const callTime = moment(date)
        .add(1, 'week')
        .round(30, 'minutes')
        .toISOString();

      const route = createRoute(routes.ROUTE_SCHEDULE_CALL, {
        callTime,
      });

      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_OPEN: {
      const { payload: { scheduledCallId } } = action;
      const route = createRoute(routes.ROUTE_SCHEDULE_CALL, { scheduledCallId });
      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_ACTIVITY_CHANGE: {
      const route = createRoute(routes.ROUTE_SCHEDULED_CALL_CATEGORY, action.payload);
      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_CATEGORY_CHOOSE: {
      const route = createRoute(routes.ROUTE_SCHEDULED_CALL_ACTIVITY, action.payload);
      return push(state, route);
    }

    case schedule.SCHEDULED_CALL_ACTIVITY_CHOOSE: {
      const {
        payload: {
          activityId,
          context,
        },
      } = action;

      let newState = state;
      newState = pop(pop(newState));
      newState = inject(newState, routes.ROUTE_SCHEDULE_CALL, {
        ...context,
        activityId,
      });

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

    default:
      return state;
  }
};
