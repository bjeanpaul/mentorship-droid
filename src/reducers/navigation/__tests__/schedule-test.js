import moment from 'moment';
import reduce from 'src/reducers/navigation/schedule';
import * as routes from 'src/constants/routes';
import * as schedule from 'src/actions/schedule';

import { createStack, createRoute, push } from 'src/navigationHelpers';


describe('src/reducers/navigation/schedule', () => {
  describe('SCHEDULED_CALL_ADD', () => {
    it('should push on the scheduled call route', () => {
      expect(reduce(createStack(), schedule.addScheduledCall('2016-09-16T11:27:14Z')))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULE_CALL, {
          date: '2016-09-16T11:27:14Z',
        })));
    });
  });

  describe('SCHEDULED_CALL_ADD_NEXT', () => {
    it('should push on the scheduled call route with the next call date', () => {
      const action = schedule.addNextScheduledCall('2016-09-16T11:27:14Z');

      expect(reduce(createStack(), action))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULE_CALL, {
          callTime: moment('2016-09-23T11:30:00Z').toISOString(),
        })));
    });
  });

  describe('SCHEDULED_CALL_OPEN', () => {
    it('should push on the scheduled call route', () => {
      expect(reduce(createStack(), schedule.openScheduledCall(23)))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULE_CALL, {
          scheduledCallId: 23,
        })));
    });
  });

  describe('SCHEDULED_CALL_ACTIVITY_CHANGE', () => {
    it('should push on the choose category route', () => {
      expect(reduce(createStack(), schedule.changeScheduledCallActivity({
        foo: 21,
      })))
      .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULED_CALL_CATEGORY, {
        context: { foo: 21 },
      })));
    });
  });

  describe('SCHEDULED_CALL_CATEGORY_CHOOSE', () => {
    it('should push on the choose activity route', () => {
      expect(reduce(createStack(), schedule.chooseScheduledCallCategory(23, {
        foo: 21,
      })))
      .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULED_CALL_ACTIVITY, {
        categoryId: 23,
        context: { foo: 21 },
      })));
    });
  });

  describe('SCHEDULED_CALL_ACTIVITY_CHOOSE', () => {
    it('should pop off the choose activity routes', () => {
      const state = createStack([
        createRoute(routes.ROUTE_SCHEDULE_CALL),
        createRoute(routes.ROUTE_SCHEDULED_CALL_CATEGORY),
        createRoute(routes.ROUTE_SCHEDULED_CALL_ACTIVITY),
      ]);

      const res = reduce(state, schedule.chooseScheduledCallActivity(23, {
        foo: 21,
      }));

      expect(res).toEqual({
        index: 0,
        routes: [jasmine.objectContaining({ key: routes.ROUTE_SCHEDULE_CALL })],
      });
    });

    it('should update the scheduled call route context with the chosen activity', () => {
      const state = createStack([
        createRoute(routes.ROUTE_SCHEDULE_CALL, { scheduledCallId: 21 }),
        createRoute(routes.ROUTE_SCHEDULED_CALL_CATEGORY),
        createRoute(routes.ROUTE_SCHEDULED_CALL_ACTIVITY),
      ]);

      const {
        routes: [{ context }],
      } = reduce(state, schedule.chooseScheduledCallActivity(23, { foo: 21 }));

      expect(context).toEqual({
        scheduledCallId: 21,
        activityId: 23,
        foo: 21,
      });
    });
  });

  describe('SCHEDULED_CALL_ACTIVITY_REMOVE', () => {
    it('should nullify the activity on the scheduled call route context', () => {
      const state = createStack([
        createRoute(routes.ROUTE_SCHEDULE_CALL, { scheduledCallId: 21 }),
        createRoute(routes.ROUTE_SCHEDULED_CALL_CATEGORY),
        createRoute(routes.ROUTE_SCHEDULED_CALL_ACTIVITY),
      ]);

      const {
        routes: [{ context }],
      } = reduce(state, schedule.removeScheduledCallActivity());

      expect(context).toEqual(jasmine.objectContaining({
        activityId: null,
      }));
    });
  });

  describe('SCHEDULED_CALL_PATCH_REQUEST', () => {
    it('should push on the scheduling call route', () => {
      expect(reduce(createStack(), schedule.patchScheduledCall.request()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULING_CALL)));
    });
  });

  describe('SCHEDULED_CALL_CREATE_REQUEST', () => {
    it('should push on the scheduling call route', () => {
      expect(reduce(createStack(), schedule.createScheduledCall.request()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULING_CALL)));
    });
  });

  describe('SCHEDULED_CALL_PATCH_FAILURE', () => {
    it('should replace the scheduling route with the failure route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_SCHEDULING_CALL));

      expect(reduce(state, schedule.patchScheduledCall.failures.apiResponseError()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_CALL_SCHEDULE_FAILURE)));
    });
  });

  describe('SCHEDULED_CALL_CREATE_FAILURE', () => {
    it('should replace the scheduling route with the failure route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_SCHEDULING_CALL));
      expect(reduce(state, schedule.createScheduledCall.failures.apiResponseError()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_CALL_SCHEDULE_FAILURE)));
    });
  });

  describe('SCHEDULED_CALL_PATCH_SUCCESS', () => {
    it('should replace the schedule and scheduling routes with the success route', () => {
      const state = createStack([
        createRoute(routes.ROUTE_SCHEDULE_CALL),
        createRoute(routes.ROUTE_SCHEDULING_CALL),
      ]);

      expect(reduce(state, schedule.patchScheduledCall.success()))
        .toEqual(createStack([createRoute(routes.ROUTE_CALL_SCHEDULED)]));
    });
  });

  describe('SCHEDULED_CALL_CREATE_SUCCESS', () => {
    it('should replace the schedule and scheduling routes with the success route', () => {
      const state = createStack([
        createRoute(routes.ROUTE_SCHEDULE_CALL),
        createRoute(routes.ROUTE_SCHEDULING_CALL),
      ]);

      expect(reduce(state, schedule.patchScheduledCall.success()))
        .toEqual(createStack([createRoute(routes.ROUTE_CALL_SCHEDULED)]));
    });
  });
});
