jest.mock('src/actions/schedule', () => ({
  createScheduledCall: global.mock(),
  patchScheduledCall: global.mock(),
  chooseScheduledCallActivity: global.mock(),
}));

import { dismissScreen } from 'src/actions/navigation';
import { mapStateToProps, mapDispatchToProps } from 'src/containers/ScheduleDetailContainer';
import { fakeState, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';

import {
  createScheduledCall, patchScheduledCall, changeScheduledCallActivity,
} from 'src/actions/schedule';


describe('ScheduleDetailContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the call time an id is given', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        23: fakeScheduledCall({
          id: 23,
          callTime: '2016-09-22T14:31:23.431Z',
        }),
      };

      const { initialCallTime } = mapStateToProps(state, { scheduledCallId: 23 });
      expect(initialCallTime).toEqual('2016-09-22T14:31:23.431Z');
    });

    it('should provide the relevant activity if an id is given', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        3: fakeScheduledCall({
          id: 3,
          activity: 21,
        }),
      };

      state.entities.activities = {
        21: fakeActivity({ id: 21 }),
      };

      const { activity } = mapStateToProps(state, { scheduledCallId: 3 });
      expect(activity).toEqual(fakeActivity({ id: 21 }));
    });

    it('should provide nothing if no id is given', () => {
      expect(mapStateToProps(fakeState(), {})).toEqual({});
    });
  });

  describe('mapDispatchToProps', () => {
    it('should map onDismissPress to dismissScreen()', () => {
      const dispatch = jest.fn();
      const { onDismissPress } = mapDispatchToProps(dispatch, {});

      expect(dispatch.mock.calls).toEqual([]);
      onDismissPress();
      expect(dispatch.mock.calls).toEqual([[dismissScreen()]]);
    });

    it('should map onActivityPress to changeScheduledCallActivity()', () => {
      const dispatch = jest.fn();
      const { onActivityPress } = mapDispatchToProps(dispatch, {});

      expect(dispatch.mock.calls).toEqual([]);
      onActivityPress();
      expect(dispatch.mock.calls).toEqual([[changeScheduledCallActivity()]]);
    });

    it('should map onDone to patchScheduledCall() if an id is given', () => {
      const dispatch = jest.fn();
      const { onDone } = mapDispatchToProps(dispatch, { scheduledCallId: 23 });

      expect(dispatch.mock.calls).toEqual([]);

      onDone({ callTime: '2016-09-22T14:31:23.431Z' });

      expect(dispatch.mock.calls).toEqual([[patchScheduledCall(23, {
        callTime: '2016-09-22T14:31:23.431Z',
      })]]);
    });

    it('should map onDone to createScheduledCall() if no id is given', () => {
      const dispatch = jest.fn();
      const { onDone } = mapDispatchToProps(dispatch, {});

      expect(dispatch.mock.calls).toEqual([]);

      onDone({ callTime: '2016-09-22T14:31:23.431Z' });

      expect(dispatch.mock.calls).toEqual([[createScheduledCall({
        callTime: '2016-09-22T14:31:23.431Z',
      })]]);
    });
  });
});
