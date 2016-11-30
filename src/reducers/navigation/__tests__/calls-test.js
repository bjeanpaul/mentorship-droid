import reduce from 'src/reducers/navigation/calls';
import * as notifications from 'src/constants/notifications';
import * as routes from 'src/constants/routes';
import * as calls from 'src/actions/calls';
import * as schedule from 'src/actions/schedule';

import {
  createStack,
  createRoute,
  push,
  replaceAt,
} from 'src/navigationHelpers';


describe('src/reducers/navigation/calls', () => {
  describe('CALL_OPEN', () => {
    it('should push on the start call route', () => {
      expect(reduce(createStack(), calls.openCall()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_START_CALL)));
    });
  });

  describe('CALL_STARTING_1_MIN_RECEIVED', () => {
    it('should push on the start call route', () => {
      expect(reduce(createStack(), {
        type: notifications.CALL_STARTING_1_MIN_RECEIVED,
        payload: { objectId: 23 },
      }))
      .toEqual(push(createStack(), createRoute(routes.ROUTE_START_CALL, {
        scheduledCallId: 23,
      })));
    });
  });

  describe('SCHEDULED_CALL_START', () => {
    it('should push on the start call route', () => {
      expect(reduce(createStack(), schedule.startScheduledCall(23)))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_START_CALL, {
          scheduledCallId: 23,
        })));
    });
  });

  describe('CALL_CREATE_REQUEST', () => {
    it('should replace the start call route with the call connecting route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_START_CALL));
      const route = createRoute(routes.ROUTE_CONNECTING_CALL);
      expect(reduce(state, calls.createCallRequest()))
        .toEqual(replaceAt(state, routes.ROUTE_START_CALL, route));
    });
  });

  describe('CONNECTING_CALL_FAILURE', () => {
    it('should replace the connecting route with the failure route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_CONNECTING_CALL));
      const route = createRoute(routes.ROUTE_CONNECTING_CALL_FAILURE);
      expect(reduce(state, calls.createCallFailure()))
        .toEqual(replaceAt(state, routes.ROUTE_CONNECTING_CALL, route));
    });

    it('should push on the failure route if there is no connecting route', () => {
      const route = createRoute(routes.ROUTE_CONNECTING_CALL_FAILURE);
      const state = createStack();
      expect(reduce(state, calls.createCallFailure())).toEqual(push(state, route));
    });
  });

  describe('CALL_ENDED_RECEIVED', () => {
    it('should replace the connecting route with a call completed route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_CONNECTING_CALL));
      const route = createRoute(routes.ROUTE_CALL_COMPLETED, { callId: 23 });

      expect(reduce(state, {
        type: notifications.CALL_ENDED_RECEIVED,
        payload: { objectId: 23 },
      }))
      .toEqual(replaceAt(state, routes.ROUTE_CONNECTING_CALL, route));
    });

    it('should push on the call completed route there is no connecting route', () => {
      expect(reduce(createStack(), {
        type: notifications.CALL_ENDED_RECEIVED,
        payload: { objectId: 23 },
      }))
      .toEqual(push(createStack(), createRoute(routes.ROUTE_CALL_COMPLETED, {
        callId: 23,
      })));
    });
  });
});
