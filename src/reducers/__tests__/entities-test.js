jest.mock('src/constants/entities', () => ({
  __esModule: true,
  ACTIONS_WITH_ENTITIES: ['ACTION_WITH_ENTITIES'],
}));

import { merge } from 'lodash/fp';
import reduce, { createInitialState } from 'src/reducers/entities';
import { logout } from 'src/actions/auth';
import { fakeState, fakeCallNote, fakeActivity } from 'app/scripts/helpers';
import { CALL_NOTE_CREATE_SUCCESS } from 'src/constants/callNotes';


describe('reducers/entities', () => {
  it('should be a noop for actions without entities', () => {
    expect(reduce({
      vogons: { 23: { id: 23 } },
    }, {
      type: 'ACTION_WITHOUT_ENTITIES',
    })).toEqual({
      vogons: { 23: { id: 23 } },
    });
  });

  it('should merge entities contained in an action', () => {
    expect(reduce({
      vogons: { 23: { id: 23 } },
    }, {
      type: 'ACTION_WITH_ENTITIES',
      payload: {
        entities: {
          mice: {
            3: { id: 3 },
          },
          vogons: {
            21: { id: 21 },
          },
        },
      },
    })).toEqual({
      mice: {
        3: { id: 3 },
      },
      vogons: {
        21: { id: 21 },
        23: { id: 23 },
      },
    });
  });

  describe('AUTH_LOGOUT', () => {
    it('should reset to initial state', () => {
      expect(reduce(fakeState().entities, logout()))
        .toEqual(jasmine.objectContaining(createInitialState()));
    });
  });

  describe('CALL_NOTE_CREATE_SUCCESS', () => {
    it('should update an activity to complete for achieved call notes', () => {
      const state = fakeState().entities;

      const act1 = fakeActivity({
        id: 1,
        objectiveAchived: false,
      });

      const act2 = fakeActivity({
        id: 2,
        objectiveAchived: false,
      });

      const callNote1 = fakeCallNote({
        id: 1,
        callActivity: null,
      });

      const callNote2 = fakeCallNote({
        id: 2,
        callActivity: 1,
        objectiveAchieved: false,
      });

      const callNote3 = fakeCallNote({
        id: 3,
        callActivity: 2,
        objectiveAchieved: true,
      });

      state.activities = {
        1: act1,
        2: act2,
      };

      expect(reduce(state, {
        type: CALL_NOTE_CREATE_SUCCESS,
        payload: {
          result: 1,
          entities: {
            callNotes: { 1: callNote1 },
          },
        },
      }))
      .toEqual(state);

      expect(reduce(state, {
        type: CALL_NOTE_CREATE_SUCCESS,
        payload: {
          result: 2,
          entities: {
            callNotes: { 2: callNote2 },
          },
        },
      }))
      .toEqual(state);

      expect(reduce(state, {
        type: CALL_NOTE_CREATE_SUCCESS,
        payload: {
          result: 3,
          entities: {
            callNotes: { 3: callNote3 },
          },
        },
      }))
      .toEqual(merge(state, {
        activities: {
          2: { isComplete: true },
        },
      }));
    });
  });
});
