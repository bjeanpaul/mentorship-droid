import { mapStateToProps } from 'src/containers/StartCallContainer';
import { fakeState, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';


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
});
