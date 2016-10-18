import { mapStateToProps } from 'src/containers/CallNoteStepperContainer';
import { fakeState, fakeCall } from 'app/scripts/helpers';


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
