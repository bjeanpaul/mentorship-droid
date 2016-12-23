jest.mock('src/constants/entities', () => ({
  __esModule: true,
  ACTIONS_WITH_ENTITIES: [
    'ACTION_WITH_ENTITIES',
    'MESSAGE_SEND_SUCCESS',
  ],
}));

import { createPendingMessage } from 'src/api';
import reduce, { createInitialState } from 'src/reducers/entities';
import { logout } from 'src/actions/auth';
import { MESSAGE_SEND_SUCCESS } from 'src/constants/messages';
import { fakeState } from 'app/scripts/helpers';

import {
  fakeMessage,
  fakeMessageData,
} from 'app/scripts/helpers';


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

  describe('MESSAGE_SEND_SUCCESS', () => {
    it('should remove the relevant pending message', () => {
      const state = {
        pendingMessages: {
          23: createPendingMessage(),
        },
      };

      const action = {
        type: MESSAGE_SEND_SUCCESS,
        payload: {
          ...fakeMessageData(),
          pendingId: 23,
        },
      };

      const nextState = reduce(state, action);
      expect(23 in nextState.pendingMessages).toBe(false);
    });

    it('should merge in the message entity in the payload', () => {
      const state = {
        pendingMessages: {
          23: createPendingMessage(),
        },
        messages: {},
      };

      const msg = fakeMessage({ id: 21 });

      const action = {
        type: MESSAGE_SEND_SUCCESS,
        payload: {
          ...fakeMessageData(msg),
          pendingId: 23,
        },
      };

      const nextState = reduce(state, action);
      expect(nextState.messages[21]).toEqual(msg);
    });
  });
});
