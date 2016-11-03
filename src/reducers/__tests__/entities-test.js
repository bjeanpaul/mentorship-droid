jest.mock('src/constants/entities', () => ({
  __esModule: true,
  ACTIONS_WITH_ENTITIES: ['ACTION_WITH_ENTITIES'],
}));

import reduce from 'src/reducers/entities';
import { logout } from 'src/actions/auth';
import { fakeCategory, fakeActivity } from 'app/scripts/helpers';


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
    it('should clear category entitites', () => {
      const state = {
        categories: {
          23: fakeCategory(),
        },
      };

      expect(reduce(state, logout()))
        .toEqual(jasmine.objectContaining({ categories: {} }));
    });

    it('should clear activity entitites', () => {
      const state = {
        activities: {
          23: fakeActivity(),
        },
      };

      expect(reduce(state, logout()))
        .toEqual(jasmine.objectContaining({ activities: {} }));
    });
  });
});
