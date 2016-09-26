import reduce from 'src/reducers/navigation/top';
import * as entry from 'src/actions/entry';
import * as landing from 'src/actions/landing';
import * as sync from 'src/actions/sync';
import * as onboarding from 'src/actions/onboarding';
import * as notifications from 'src/constants/notifications';
import * as routes from 'src/constants/routes';
import * as calls from 'src/actions/calls';
import * as callNotes from 'src/actions/callNotes';
import * as journey from 'src/actions/journey';
import * as schedule from 'src/actions/schedule';

import {
  createDummyRoute, createStack, createRoute, push, pop, replaceAt,
} from 'src/navigationHelpers';


describe('src/reducers/navigation/top', () => {
  describe('SHOW_ACTIVATION_REQUEST', () => {
    it('should push the activation route', () => {
      expect(reduce(createStack(), landing.showActivation()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_AUTH_ACTIVATION)));
    });
  });

  describe('SHOW_LOGIN_REQUEST', () => {
    it('should push the login route', () => {
      expect(reduce(createStack(), landing.showLogin()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_AUTH_LOGIN)));
    });
  });

  describe('ONBOARDING_CHOOSE_PROFILE_PICTURE', () => {
    it('should insert the camera roll route', () => {
      const cameraRollRoute = createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL);
      expect(reduce(createStack(), onboarding.chooseProfilePicture()))
        .toEqual(push(createStack(), cameraRollRoute));
    });
  });

  describe('ONBOARDING_CHANGE_PROFILE_PICTURE', () => {
    it('should pop from the state', () => {
      expect(reduce(createStack(), onboarding.changeProfilePicture()))
        .toEqual(pop(createStack()));
    });
  });

  describe('NEW_USER_ENTER', () => {
    it('should push the onboarding entry route', () => {
      expect(reduce(createStack(), entry.enterNewUser()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_ONBOARDING)));
    });
  });

  describe('LOAD_REQUEST', () => {
    it('should push the loading route', () => {
      expect(reduce(createStack(), sync.loadRequest()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_LOADING)));
    });
  });

  describe('LOAD_SUCCESS', () => {
    it('should replace the loading route with the navigator route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_LOADING));
      const route = createRoute(routes.ROUTE_NAVIGATOR);
      expect(reduce(state, sync.loadSuccess()))
        .toEqual(replaceAt(state, routes.ROUTE_LOADING, route));
    });
  });

  describe('LOAD_FAILURE', () => {
    it('should replace the loading route with the load failure route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_LOADING));
      const route = createRoute(routes.ROUTE_LOADING_FAILURE);
      expect(reduce(state, sync.loadFailure()))
        .toEqual(replaceAt(state, routes.ROUTE_LOADING, route));
    });
  });

  describe('CALL_OPEN', () => {
    it('should push on the start call route', () => {
      expect(reduce(createStack(), journey.openCall()))
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

  describe('CALL_CREATE_REQUEST', () => {
    it('should replace the start call route with the call connecting route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_START_CALL));
      const route = createRoute(routes.ROUTE_CONNECTING_CALL);
      expect(reduce(state, calls.createCallRequest()))
        .toEqual(replaceAt(state, routes.ROUTE_START_CALL, route));
    });
  });

  describe('CONNECTING_CALL_FAILURE', () => {
    it('should replace the loading route with the load failure route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_CONNECTING_CALL));
      const route = createRoute(routes.ROUTE_CONNECTING_CALL_FAILURE);
      expect(reduce(state, calls.createCallFailure()))
        .toEqual(replaceAt(state, routes.ROUTE_CONNECTING_CALL, route));
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

  describe('CALL_NOTES_CREATE', () => {
    it('should replace the call completed route with create call notes route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_CALL_COMPLETED));
      const route = createRoute(routes.ROUTE_CREATE_CALL_NOTES, { callId: 23 });

      expect(reduce(state, callNotes.createCallNotes(23)))
        .toEqual(replaceAt(state, routes.ROUTE_CALL_COMPLETED, route));
    });

    it('should push on the create call notes route there is no call completed route', () => {
      expect(reduce(createStack(), callNotes.createCallNotes(23)))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_CREATE_CALL_NOTES, {
          callId: 23,
        })));
    });
  });

  describe('SCHEDULED_CALL_ADD', () => {
    it('should push on the scheduled route', () => {
      expect(reduce(createStack(), schedule.addScheduledCall()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULE_CALL)));
    });
  });

  describe('SCHEDULED_CALL_CHOOSE', () => {
    it('should push on the scheduled route', () => {
      expect(reduce(createStack(), schedule.chooseScheduledCall(23)))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULE_CALL, {
          scheduledCallId: 23,
        })));
    });
  });

  describe('SCHEDULED_CALL_ACTIVITY_CHOOSE', () => {
    it('should push on the choose category route', () => {
      expect(reduce(createStack(), schedule.chooseScheduledCallActivity()))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_CHOOSE_CATEGORY)));
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
        .toEqual(createStack([
          createDummyRoute(createDummyRoute.index),
          createRoute(routes.ROUTE_CALL_SCHEDULED),
        ]));
    });
  });

  describe('SCHEDULED_CALL_CREATE_SUCCESS', () => {
    it('should replace the schedule and scheduling routes with the success route', () => {
      const state = createStack([
        createRoute(routes.ROUTE_SCHEDULE_CALL),
        createRoute(routes.ROUTE_SCHEDULING_CALL),
      ]);

      expect(reduce(state, schedule.patchScheduledCall.success()))
        .toEqual(createStack([
          createDummyRoute(createDummyRoute.index),
          createRoute(routes.ROUTE_CALL_SCHEDULED),
        ]));
    });
  });
});
