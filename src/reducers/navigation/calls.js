import * as calls from 'src/constants/calls';
import * as routes from 'src/constants/routes';
import * as schedule from 'src/constants/schedule';
import * as notifications from 'src/constants/notifications';
import { push, replaceOrPush, createRoute } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
