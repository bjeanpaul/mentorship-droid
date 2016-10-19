import moment from 'moment';
import reduce, { createInitialState } from 'src/reducers/tick';


describe('reducers/tick', () => {
  describe('TICK', () => {
    it('should update the tick time', () => {
      const now = +moment();

      const state = {
        ...createInitialState(),
        time: now - 23,
      };

      expect(reduce(state, { type: 'TICK' })).toEqual({
        ...createInitialState(),
        time: now,
      });
    });
  });
});
