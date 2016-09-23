jest.mock('src/actions/calls', () => ({
  createCall: global.mock(),
}));

import { mapStateToProps } from 'src/containers/ScheduleListContainer';
import { fakeState, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';


describe('ScheduleListContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the currently scheduled calls', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        2: fakeScheduledCall({ id: 2 }),
        3: fakeScheduledCall({
          id: 3,
          activity: 21,
        }),
      };

      state.entities.activities = {
        21: fakeActivity({ id: 21 }),
      };

      const { calls } = mapStateToProps(state);

      expect(calls).toEqual([
        fakeScheduledCall({ id: 2 }),
        fakeScheduledCall({
          id: 3,
          activity: fakeActivity({ id: 21 }),
        }),
      ]);
    });
  });
});
