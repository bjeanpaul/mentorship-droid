import { mapStateToProps } from 'src/containers/CallNoteStepperContainer';
import { fakeState, fakeCall, fakeActivity } from 'app/scripts/helpers';


describe('CallNoteStepperContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the call', () => {
      const call = fakeCall({ id: 20 });

      const state = fakeState({
        entities: {
          calls: {
            20: call,
          },
        },
      });

      expect(mapStateToProps(state, { callId: 20 }))
        .toEqual(jasmine.objectContaining({ call }));
    });

    it('should provide the activity', () => {
      const activity = fakeActivity({ id: 23 });

      const state = fakeState({
        entities: {
          calls: {
            20: fakeCall({
              id: 20,
              activity: 23,
            }),
          },
          activities: {
            23: activity,
          },
        },
      });

      expect(mapStateToProps(state, { callId: 20 }))
        .toEqual(jasmine.objectContaining({ activity }));
    });

    it('should handle non-existent activities gracefully', () => {
      const state = fakeState({
        entities: {
          calls: {
            20: fakeCall({
              id: 20,
              activity: 23,
            }),
          },
        },
      });

      state.entities.activities = {};

      expect(mapStateToProps(state, { callId: 20 }))
        .toEqual(jasmine.objectContaining({ activity: void 0 }));
    });

    it('should provide navigation state', () => {
      const call = fakeCall({ id: 20 });

      const state = fakeState({
        entities: {
          calls: {
            20: call,
          },
        },
      });

      const { callNote: { navigation: navigationState } } = state;

      expect(mapStateToProps(state, { callId: 20 }))
        .toEqual(jasmine.objectContaining({ navigationState }));
    });
  });
});
