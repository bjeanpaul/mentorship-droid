import { mapStateToProps } from 'src/containers/ActivityContainer';

import {
  fakeState, fakeActivity, fakeCategory, fakeScheduledCall, fakeCall, fakeCallNote,
} from 'app/scripts/helpers';


describe('ActivityContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the relevant activity', () => {
      const state = fakeState({
        entities: {
          activities: {
            23: fakeActivity({ id: 23 }),
          },
        },
      });

      expect(mapStateToProps(state, { activityId: 23 }))
        .toEqual(jasmine.objectContaining({
          activity: fakeActivity({ id: 23 }),
        }));
    });

    it('should provide the relevant category', () => {
      const state = fakeState({
        entities: {
          activities: {
            21: fakeActivity({
              id: 21,
              category: 23,
            }),
          },
          categories: {
            23: fakeCategory({ id: 23 }),
          },
        },
      });

      expect(mapStateToProps(state, { activityId: 21 }))
        .toEqual(jasmine.objectContaining({
          category: fakeCategory({ id: 23 }),
        }));
    });

    it('should provide the next scheduled call', () => {
      const scheduledCall = fakeScheduledCall({
        id: 2,
        activity: 21,
        callTime: '2017-12-12',
      });

      const state = fakeState({
        entities: {
          activities: {
            21: fakeActivity({ id: 21 }),
          },
          scheduledCalls: {
            2: scheduledCall,
          },
        },
      });

      expect(mapStateToProps(state, { activityId: 21 }))
        .toEqual(jasmine.objectContaining({
          nextScheduledCall: scheduledCall,
        }));
    });

    it('should provide the latest call note recorded for this activity', () => {
      const callNote = fakeCallNote({
        id: 2,
        call: 3,
      });

      const state = fakeState();

      state.entities.calls = {
        1: fakeCall({
          id: 1,
          activity: 23,
        }),
        2: fakeCall({
          id: 2,
          activity: 21,
        }),
        3: fakeCall({
          id: 3,
          activity: 21,
        }),
      };

      state.entities.activities = {
        21: fakeActivity({ id: 21 }),
      };

      state.entities.callNotes = {
        1: fakeCallNote({
          id: 1,
          call: 3,
        }),
        2: callNote,
      };

      expect(mapStateToProps(state, { activityId: 21 }))
        .toEqual(jasmine.objectContaining({
          latestCallNote: callNote,
        }));
    });
  });
});
