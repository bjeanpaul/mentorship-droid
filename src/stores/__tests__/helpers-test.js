import {
  fakeState,
  fakeProfile,
  fakeAuth,
  fakeActivity,
  fakeCategory,
  fakeScheduledCall,
  fakeEvent,
} from 'app/scripts/helpers';

import {
  getContext,
  getAuthUserProfile,
  getCategories,
  getCategory,
  getCategoryActivities,
  getActivity,
  getScheduledCall,
  getScheduledCalls,
  getScheduledCallActivity,
  getEvents,
} from 'src/stores/helpers';


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

  describe('getEvents', () => {
    it('should get a list of events', () => {
      const state = fakeState();
      state.entities.events = {
        1: fakeEvent({ id: 1 }),
        3: fakeEvent({ id: 3 }),
      };
      expect(getEvents(state)).toEqual([
        fakeEvent({ id: 1 }),
        fakeEvent({ id: 3 }),
      ]);
    });
  });

  describe('getScheduledCall', () => {
    it('should get the scheduled call for the given id', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        6: fakeScheduledCall({ id: 6 }),
      };

      expect(getScheduledCall(state, 6)).toEqual(fakeScheduledCall({ id: 6 }));
    });
  });

  describe('getScheduledCalls', () => {
    it('should get the currently scheduled calls', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        2: fakeScheduledCall({ id: 2 }),
        3: fakeScheduledCall({ id: 3 }),
      };

      expect(getScheduledCalls(state)).toEqual([
        fakeScheduledCall({ id: 2 }),
        fakeScheduledCall({ id: 3 }),
      ]);
    });
  });

  describe('getScheduledCallActivity', () => {
    it('should get the activity for scheduled call', () => {
      const state = fakeState();

      const fakeActivity4 = fakeActivity({ id: 4 });
      const fakeScheduledCall6 = fakeScheduledCall({
        id: 6,
        activity: 4,
      });

      state.entities.scheduledCalls = {
        6: fakeScheduledCall6,
      };
      state.entities.activities = {
        4: fakeActivity4,
      };
      expect(getScheduledCallActivity(state, 6)).toEqual(fakeActivity4);
    });

    it('should return undefined if a scheduled call does not have an activity', () => {
      const state = fakeState();
      expect(getScheduledCallActivity(state, 6)).toEqual(void 0);
    });
  });
});
