import { mapStateToProps } from 'src/containers/ScheduledCallEventContainer';
import { fakeState, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';


describe('CallScheduledEventContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the scheduled call', () => {
      const scheduledCall = fakeScheduledCall({ id: 21 });

      const state = fakeState({
        entities: {
          scheduledCalls: {
            21: scheduledCall,
          },
        },
      });

      expect(mapStateToProps(state, { objectId: 21 }))
        .toEqual(jasmine.objectContaining({ scheduledCall }));
    });

    it('should provide the activity', () => {
      const activity = fakeActivity({ id: 23 });

      const scheduledCall = fakeScheduledCall({
        id: 21,
        activity: 23,
      });

      const state = fakeState({
        entities: {
          scheduledCalls: {
            21: scheduledCall,
          },
          activities: {
            23: activity,
          },
        },
      });

      expect(mapStateToProps(state, { objectId: 21 }))
        .toEqual(jasmine.objectContaining({ activity }));
    });
  });
});
