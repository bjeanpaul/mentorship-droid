import moment from 'moment';

import { START_CALL_RANGE_END } from 'src/constants/schedule';
import { mapStateToProps } from 'src/containers/JourneyContainer';
import { fakeState, fakeScheduledCall } from 'app/scripts/helpers';


describe('JourneyContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the current call to be started', () => {
      const state = fakeState();

      const scheduledCall = fakeScheduledCall({
        id: 2,
        callTime: +moment() + (START_CALL_RANGE_END * 0.5),
      });

      state.entities.scheduledCalls = {
        2: scheduledCall,
        3: fakeScheduledCall({
          id: 3,
          callTime: +moment() + 2 * START_CALL_RANGE_END,
        }),
      };

      expect(mapStateToProps(state)).toEqual(jasmine.objectContaining({
        scheduledCall,
        shouldStartCall: true,
      }));
    });

    it('should provide the next scheduled call if no call is to be started', () => {
      const state = fakeState();

      const scheduledCall = fakeScheduledCall({
        id: 23,
        callTime: +moment() + 2 * START_CALL_RANGE_END,
      });

      state.entities.scheduledCalls = {
        23: scheduledCall,
      };

      expect(mapStateToProps(state)).toEqual(jasmine.objectContaining({
        scheduledCall,
        shouldStartCall: false,
      }));
    });
  });
});
