jest.mock('src/actions/calls', () => ({
  createCall: global.mock(),
}));

import { mapStateToProps, mapDispatchToProps } from 'src/containers/StartCallContainer';
import { fakeState, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';
import { createCall } from 'src/actions/calls';
import { dismissScreen } from 'src/actions/navigation';


describe('StartCallContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the relevant scheduled call', () => {
      const scheduledCall = fakeScheduledCall({ id: 23 });

      const state = fakeState({
        entities: {
          scheduledCalls: {
            23: scheduledCall,
          },
        },
      });

      expect(mapStateToProps(state, {
        scheduledCallId: 23,
      })).toEqual(jasmine.objectContaining({
        scheduledCall,
      }));
    });

    it('should provide the relevant activity', () => {
      const activity = fakeActivity({ id: 21 });

      const state = fakeState({
        entities: {
          activities: {
            21: activity,
          },
          scheduledCalls: {
            23: fakeScheduledCall({
              id: 23,
              activity: 21,
            }),
          },
        },
      });

      expect(mapStateToProps(state, {
        scheduledCallId: 23,
      })).toEqual(jasmine.objectContaining({
        activity,
      }));
    });

    it('should not provide anything if a scheduled call id isnt given', () => {
      expect(mapStateToProps(fakeState(), {})).toEqual({});
    });
  });

  describe('mapDispatchToProps', () => {
    it('should map onActivatePress to createCall()', () => {
      const dispatch = jest.fn();
      const { onActivatePress } = mapDispatchToProps(dispatch);

      expect(dispatch.mock.calls).toEqual([]);

      onActivatePress(fakeActivity());

      expect(dispatch.mock.calls).toEqual([[
        createCall({ activity: fakeActivity() }),
      ]]);
    });

    it('should not pass an activity to createCall() if there is no relevant activity', () => {
      const dispatch = jest.fn();
      const { onActivatePress } = mapDispatchToProps(dispatch);

      expect(dispatch.mock.calls).toEqual([]);
      onActivatePress(void 0);
      expect(dispatch.mock.calls).toEqual([[createCall({})]]);
    });

    it('should map onDismissPress to dismissScreen()', () => {
      const dispatch = jest.fn();
      const { onDismissPress } = mapDispatchToProps(dispatch, { callId: 23 });

      expect(dispatch.mock.calls).toEqual([]);
      onDismissPress();
      expect(dispatch.mock.calls).toEqual([[dismissScreen()]]);
    });
  });
});
