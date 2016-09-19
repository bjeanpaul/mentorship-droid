import {
  fakeState,
  fakeProfile,
  fakeAuth,
  fakeActivity,
  fakeCategory,
  fakeEvent,
  fakeScheduledCall,
} from 'app/scripts/helpers';

import {
  getContext,
  getAuthUserProfile,
  getCategories,
  getCategory,
  getCategoryActivities,
  getActivity,
  getEvents,
  mapScheduledCallEvent,
} from 'src/stores/helpers';

import {
  EVENT_TYPE_SCHEDULED_CALL_CREATED,
} from 'src/constants/event';
import { JOURNEY_EVENT_SCHEDULED_CALL_ICON } from 'src/constants/images';


describe('helpers', () => {
  describe('getContext', () => {
    it('should get auth details', () => {
      expect(getContext(fakeState({
        auth: { auth: fakeAuth() },
      }))).toEqual(jasmine.objectContaining({
        auth: fakeAuth(),
      }));
    });

    it('should get profile details', () => {
      expect(getContext(fakeState({
        auth: { profileId: 23 },
        entities: {
          profiles: {
            23: fakeProfile({ id: 23 }),
          },
        },
      }))).toEqual(jasmine.objectContaining({
        profile: fakeProfile({ id: 23 }),
      }));
    });
  });

  describe('getAuthUserProfile', () => {
    it('should get the authed users profile id', () => {
      expect(getAuthUserProfile(fakeState({
        auth: { profileId: 23 },
        entities: {
          profiles: {
            23: fakeProfile({ id: 23 }),
          },
        },
      })))
      .toEqual(fakeProfile({ id: 23 }));
    });

    it('should return null if there is no authed user profile id', () => {
      const state = fakeState();
      state.auth.profileId = void 0;

      expect(getAuthUserProfile(state)).toEqual(null);
    });
  });

  describe('getCategories', () => {
    it('should get all categories', () => {
      const state = fakeState();

      state.entities.categories = {
        2: fakeCategory({ id: 2 }),
        3: fakeCategory({ id: 3 }),
      };

      expect(getCategories(state))
      .toEqual([
        fakeCategory({ id: 2 }),
        fakeCategory({ id: 3 }),
      ]);
    });
  });

  describe('getCategory', () => {
    it('should get the category from the given id', () => {
      const state = fakeState();

      state.entities.categories = {
        2: fakeCategory({ id: 2 }),
        3: fakeCategory({ id: 3 }),
      };

      expect(getCategory(state, 2)).toEqual(fakeCategory({ id: 2 }));
    });
  });

  describe('getActivity', () => {
    it('should get the activity from the given id', () => {
      const state = fakeState();

      state.entities.categories = {
        2: fakeActivity({ id: 2 }),
        3: fakeActivity({ id: 3 }),
      };

      expect(getActivity(state, 2)).toEqual(fakeActivity({ id: 2 }));
    });
  });

  describe('getCategoryActivities', () => {
    it('should get all activities of a given category', () => {
      const state = fakeState();

      const activity1 = fakeActivity({
        id: 1,
        category: 7,
      });

      const activity2 = fakeActivity({
        id: 2,
        category: 7,
      });

      state.entities.activities = {
        1: activity1,
        2: activity2,
        3: fakeActivity({
          id: 3,
          category: 8,
        }),
      };

      expect(getCategoryActivities(state, 7)).toEqual([
        activity1,
        activity2,
      ]);
    });
  });

  describe('mapScheduledCallEvent', () => {

    it('should include the activity icon of the scheduled call', () => {

      const state = fakeState();
      const event3 = fakeEvent({
        type: EVENT_TYPE_SCHEDULED_CALL_CREATED,
        id: 3,
        objectId: 5, // scheduledCall5
      });
      const scheduledCall5 = fakeScheduledCall({
        id: 5,
        activity: 1, // activity1
      });
      const activity1 = fakeActivity({
        id: 1,
        icon: 'http://icons.are.everywhere/',
        category: 7,
      });

      state.entities.events = { 3: event3 };
      state.entities.scheduledCalls = { 5: scheduledCall5 }
      state.entities.activities = { 1: activity1 };

      expect(mapScheduledCallEvent(event3, state)).toEqual({
        type: EVENT_TYPE_SCHEDULED_CALL_CREATED,
        date: event3.occuredAt,
        icon: activity1.icon,
        title: 'Call Scheduled',
        blurb: 'Friday 16th, September 2016'
      });
    });

    it('should use default icon for unscheduled calls', () => {

      const state = fakeState();
      const event3 = fakeEvent({
        type: EVENT_TYPE_SCHEDULED_CALL_CREATED,
        id: 3,
        objectId: null,
      });
      state.entities.events = { 3: event3 };

      expect(mapScheduledCallEvent(event3, state)).toEqual({
        type: EVENT_TYPE_SCHEDULED_CALL_CREATED,
        date: event3.occuredAt,
        icon: JOURNEY_EVENT_SCHEDULED_CALL_ICON,
        title: 'Call Scheduled',
        blurb: 'Friday 16th, September 2016'
      });
    });

  });

});
