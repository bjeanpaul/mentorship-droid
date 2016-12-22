jest.mock('src/actions/schedule', () => ({
  createScheduledCall: global.mock(),
  patchScheduledCall: global.mock(),
  changeScheduledCallActivity: global.mock(),
}));

import { dismissScreen } from 'src/actions/navigation';
import { mapStateToProps, mapDispatchToProps } from 'src/containers/ScheduleDetailContainer';
import { fakeState, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';

import {
  createScheduledCall, patchScheduledCall, changeScheduledCallActivity,
} from 'src/actions/schedule';


describe('ScheduleDetailContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the call time if an id is given', () => {
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

    it('should provide the relevant activity if a scheduled call id is given', () => {
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

    it('should provide the relevant activity if its id is given', () => {
      const state = fakeState();

      state.entities.activities = {
        23: fakeActivity({ id: 23 }),
      };

      const { activity } = mapStateToProps(state, { activityId: 23 });
      expect(activity).toEqual(fakeActivity({ id: 23 }));
    });

    it('should not provide an activity if the given id is null', () => {
      const state = fakeState();
      const { activity } = mapStateToProps(state, { activityId: null });
      expect(activity).toEqual(null);
    });

    it('should override the scheduled activity if an activity id is given', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        3: fakeScheduledCall({
          id: 3,
          activity: 21,
        }),
      };

      state.entities.activities = {
        21: fakeActivity({ id: 21 }),
        23: fakeActivity({ id: 23 }),
      };

      const { activity } = mapStateToProps(state, {
        scheduledCallId: 3,
        activityId: 23,
      });

      expect(activity).toEqual(fakeActivity({ id: 23 }));
    });

    it('should provide other scheduled call times', () => {
      const state = fakeState();

      state.entities.scheduledCalls = {
        2: fakeScheduledCall({
          id: 2,
          callTime: '2016-09-22T14:31:23.431Z',
        }),
        3: fakeScheduledCall({
          id: 3,
          callTime: '2016-09-23T14:31:23.431Z',
        }),
        4: fakeScheduledCall({
          id: 4,
          callTime: '2016-09-24T14:31:23.431Z',
        }),
      };

      const { callTimes } = mapStateToProps(state, { scheduledCallId: 3 });

      expect(callTimes).toEqual([
        '2016-09-22T14:31:23.431Z',
        '2016-09-24T14:31:23.431Z',
      ]);
    });

    it('should map the given date as the initial date', () => {
      const { initialDate } = mapStateToProps(fakeState(), {
        scheduledCallId: 23,
        date: '2016-09-22T14:31:23.431Z',
      });

      expect(initialDate).toEqual('2016-09-22T14:31:23.431Z');
    });

    it('should map the given time as the initial time', () => {
      const { initialTime } = mapStateToProps(fakeState(), {
        scheduledCallId: 23,
        time: '2016-09-22T14:31:23.431Z',
      });

      expect(initialTime).toEqual('2016-09-22T14:31:23.431Z');
    });

    it('should map the given call time as the initial call time', () => {
      const { initialCallTime } = mapStateToProps(fakeState(), {
        callTime: '2016-09-22T14:31:23.431Z',
      });

      expect(initialCallTime).toEqual('2016-09-22T14:31:23.431Z');
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

    it('should map onDone to patchScheduledCall() with an activity if given', () => {
      const dispatch = jest.fn();

      const { onDone } = mapDispatchToProps(dispatch, {
        scheduledCallId: 23,
      });

      onDone({
        callTime: '2016-09-22T14:31:23.431Z',
      });

      expect(dispatch.mock.calls).toEqual([[patchScheduledCall(23, {
        callTime: '2016-09-22T14:31:23.431Z',
      })]]);
    });

    it('should map onDone to createScheduledCall() with an activity if given', () => {
      const dispatch = jest.fn();

      const { onDone } = mapDispatchToProps(dispatch, {});

      onDone({
        callTime: '2016-09-22T14:31:23.431Z',
      });

      expect(dispatch.mock.calls).toEqual([[createScheduledCall({
        callTime: '2016-09-22T14:31:23.431Z',
      })]]);
    });
  });
});
