import moment from 'moment';

import {
  EVENT_TYPE_CALL_NOTES_CREATED,
  EVENT_TYPE_SCHEDULED_CALL_CREATED,
} from 'src/constants/events';

import {
  createStack,
  createRoute,
} from 'src/navigationHelpers';

import {
  fakeState,
  fakeProfile,
  fakeAuth,
  fakeActivity,
  fakeCategory,
  fakeScheduledCall,
  fakeCall,
  fakeEvent,
  fakeCallNote,
  fakeMessage,
  fakePendingMessage,
  fakeBlogPost,
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
  getCallNotes,
  getCall,
  getCallsWithCallNotes,
  getCallNote,
  getNextScheduledCall,
  getScheduledCallsBetween,
  getMessages,
  getMessage,
  getActiveTopRoute,
  getBlogPosts,
  getBlogPost,
} from 'src/store/helpers';


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

      const category1 = fakeCategory({
        id: 1,
        ordinal: 2,
      });

      const category2 = fakeCategory({
        id: 2,
        ordinal: 1,
      });

      state.entities.categories = {
        1: category1,
        3: category2,
      };

      expect(getCategories(state)).toEqual([category2, category1]);
    });

    it('should support omitting hidden categories', () => {
      const state = fakeState();

      const category1 = fakeCategory({
        id: 1,
        isHidden: true,
      });

      const category2 = fakeCategory({
        id: 2,
        isHidden: false,
      });

      state.entities.categories = {
        1: category1,
        2: category2,
      };

      expect(getCategories(state, { omitHidden: true })).toEqual([category2]);
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
        ordinal: 2,
      });

      const activity2 = fakeActivity({
        id: 2,
        category: 7,
        ordinal: 1,
      });

      state.entities.activities = {
        1: activity1,
        2: activity2,
        3: fakeActivity({
          id: 3,
          category: 8,
        }),
      };

      expect(getCategoryActivities(state, 7)).toEqual([activity2, activity1]);
    });

    it('should support omitting hidden activities', () => {
      const state = fakeState();

      const activity1 = fakeActivity({
        id: 1,
        category: 7,
        isHidden: true,
      });

      const activity2 = fakeActivity({
        id: 2,
        category: 7,
        isHidden: false,
      });

      state.entities.activities = {
        1: activity1,
        2: activity2,
      };

      expect(getCategoryActivities(state, 7, {
        omitHidden: true,
      })).toEqual([activity2]);
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

    it('should omit events without their required entities', () => {
      const state = fakeState();

      const event1 = fakeEvent({
        id: 21,
        objectId: 2,
        eventType: EVENT_TYPE_CALL_NOTES_CREATED,
      });

      const event2 = fakeEvent({
        id: 23,
        objectId: 3,
        eventType: EVENT_TYPE_SCHEDULED_CALL_CREATED,
      });

      state.entities.events = {
        21: event1,
        23: event2,
      };

      state.entities.scheduledCalls = {};

      state.entities.callNotes = {
        2: fakeCallNote({ id: 2 }),
      };

      expect(getEvents(state)).toEqual([event1]);
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

  describe('getCall', () => {
    it('should get the call for the given id', () => {
      const state = fakeState();

      state.entities.calls = {
        6: fakeCall({ id: 6 }),
      };

      expect(getCall(state, 6)).toEqual(fakeCall({ id: 6 }));
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

  describe('getNextScheduledCall', () => {
    it('should get the next scheduled call', () => {
      const state = fakeState();

      const target = fakeScheduledCall({
        id: 3,
        callTime: '2016-09-22T14:31:23.431Z',
      });

      state.entities.scheduledCalls = {
        1: fakeScheduledCall({
          id: 1,
          callTime: '2016-09-22T14:31:21.431Z',
        }),
        2: fakeScheduledCall({
          id: 2,
          callTime: '2016-09-22T14:31:22.431Z',
        }),
        3: target,
        4: fakeScheduledCall({
          id: 4,
          callTime: '2016-09-22T14:31:24.431Z',
        }),
        5: fakeScheduledCall({
          id: 5,
          callTime: '2016-09-22T14:31:25.431Z',
        }),
      };

      expect(getNextScheduledCall(state, null, '2016-09-22T14:31:23.431Z'))
        .toEqual(target);
    });

    it('should return the next scheduled call when none are in the past', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        4: fakeScheduledCall({
          id: 4,
          callTime: '2016-09-25',
        }),
        5: fakeScheduledCall({
          id: 5,
          callTime: '2016-09-30',
        }),
      };

      expect(getNextScheduledCall(state, null, '2016-09-20').callTime)
        .toEqual('2016-09-25');
    });

    it('should support a predicate', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        4: fakeScheduledCall({
          id: 4,
          callTime: '2016-09-24',
          activity: 21,
        }),
        5: fakeScheduledCall({
          id: 5,
          callTime: '2016-09-25',
          activity: 23,
        }),
      };

      expect(getNextScheduledCall(state, { activity: 23 }, '2016-09-20').callTime)
        .toEqual('2016-09-25');
    });
  });

  describe('getScheduledCallsBetween', () => {
    it('should get scheduled calls in the given window', () => {
      const state = fakeState();
      const t = +moment();

      const a = fakeScheduledCall({
        id: 2,
        callTime: t - 500,
      });

      const b = fakeScheduledCall({
        id: 3,
        callTime: t + 300,
      });

      state.entities.scheduledCalls = {
        1: fakeScheduledCall({
          id: 1,
          callTime: t - 1000,
        }),
        2: a,
        3: b,
        4: fakeScheduledCall({
          id: 4,
          callTime: t + 500,
        }),
      };

      expect(getScheduledCallsBetween(state, 600, 400, t)).toEqual([a, b]);
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

  describe('getCallNotes', () => {
    it('should get all call notes in order of their start time', () => {
      const callNote1 = fakeCallNote({
        id: 1,
        callStartTime: '2016-05-21',
      });

      const callNote2 = fakeCallNote({
        id: 2,
        callStartTime: '2016-05-20',
      });

      const callNote3 = fakeCallNote({
        id: 3,
        callStartTime: '2016-05-22',
      });

      const state = fakeState();

      state.entities.callNotes = {
        1: callNote1,
        2: callNote2,
        3: callNote3,
      };

      expect(getCallNotes(state)).toEqual([
        callNote2,
        callNote1,
        callNote3,
      ]);
    });
  });

  describe('getCallNote', () => {
    it('should get the call notes for the id', () => {
      const callNote1 = fakeCallNote({
        id: 2,
        callActivityId: 20,
      });

      const state = fakeState();
      state.entities.callNotes = {
        2: callNote1,
      };

      expect(getCallNote(state, 2)).toEqual(callNote1);
    });
  });

  describe('getMessages', () => {
    it('should get the current messages in descending order', () => {
      const msg1 = fakeMessage({
        id: 1,
        timestamp: '2016-11-02T09:43:20.311Z',
      });

      const msg2 = fakeMessage({
        id: 2,
        timestamp: '2016-11-01T09:43:20.311Z',
      });

      const msg3 = fakePendingMessage({
        id: 3,
        timestamp: '2016-11-04T09:43:20.311Z',
      });

      const msg4 = fakePendingMessage({
        id: 4,
        timestamp: '2016-11-03:43:20.311Z',
      });

      const state = fakeState();

      state.entities.messages = {
        1: msg1,
        2: msg2,
      };

      state.entities.pendingMessages = {
        3: msg3,
        4: msg4,
      };

      expect(getMessages(state)).toEqual([
        msg1,
        msg2,
        msg3,
        msg4,
      ]);
    });
  });

  describe('getMessage', () => {
    it('should get the message with the given id', () => {
      const msg = fakeMessage({
        id: 23,
        timestamp: '2016-11-02T09:43:20.311Z',
      });

      const state = fakeState({
        entities: {
          messages: {
            23: msg,
          },
        },
      });

      expect(getMessage(state, 23)).toEqual(msg);
    });
  });

  describe('getBlogPosts', () => {
    it('should get the current blog posts in descending creation order', () => {
      const post1 = fakeBlogPost({
        id: 1,
        createdAt: '2016-11-02T09:43:20.311Z',
      });

      const post2 = fakeBlogPost({
        id: 2,
        createdAt: '2016-11-01T09:43:20.311Z',
      });

      const state = fakeState();

      state.entities.blogPosts = {
        1: post1,
        2: post2,
      };

      expect(getBlogPosts(state)).toEqual([
        post1,
        post2,
      ]);
    });
  });

  describe('getBlogPost', () => {
    it('should get the blog post with the given id', () => {
      const post = fakeBlogPost({
        id: 23,
        timestamp: '2016-11-02T09:43:20.311Z',
      });

      const state = fakeState({
        entities: {
          blogPosts: {
            23: post,
          },
        },
      });

      expect(getBlogPost(state, 23)).toEqual(post);
    });
  });

  describe('getActiveTopRoute', () => {
    it('should get the active top route', () => {
      const state = fakeState();
      const route1 = createRoute('1');
      const route2 = createRoute('2');
      state.navigation.top = createStack([route1, route2]);

      expect(getActiveTopRoute(state)).toEqual(route2);
    });
  });

  describe('getCallsWithCallNotes', () => {
    const state = fakeState();
    const call1 = fakeCall({ id: 1 });
    const call2 = fakeCall({ id: 2 });
    const callNote1 = fakeCallNote({
      id: 56,
      call: 1,
    });
    const callNote2 = fakeCallNote({
      id: 72,
      call: 2,
    });

    state.entities.calls = {
      1: call1,
      2: call2,
    };

    it('should return an object of associated calls and callnotes', () => {
      state.entities.callNotes = {
        56: callNote1,
        72: callNote2,
      };

      const expectedOutcome = [
        {
          call: call1,
          callNote: callNote1,
        },
        {
          call: call2,
          callNote: callNote2,
        },
      ];

      expect(getCallsWithCallNotes(state)).toEqual(expectedOutcome);
    });

    it('should map null where callnotes do not exist', () => {
      state.entities.callNotes = {
        56: callNote1,
      };

      const expectedOutcome = [
        {
          call: call1,
          callNote: callNote1,
        },
        {
          call: call2,
          callNote: null,
        },
      ];

      expect(getCallsWithCallNotes(state)).toEqual(expectedOutcome);
    });
  });
});
