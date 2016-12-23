jest.mock('src/constants/entities', () => ({
  __esModule: true,
  ACTIONS_WITH_ENTITIES: ['ACTION_WITH_ENTITIES'],
}));

import reduce, { createInitialState } from 'src/reducers/entities';
import { logout } from 'src/actions/auth';
import { fakeState } from 'app/scripts/helpers';


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
});
