import { mapStateToProps } from 'src/containers/CallNoteListContainer';
import { fakeState, fakeCallNote } from 'app/scripts/helpers';


describe('CallNoteListContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide all call notes', () => {
      const fakeCallNote21 = fakeCallNote({
        id: 21,
        callActivityId: 50,
      });
      const fakeCallNote100 = fakeCallNote({
        id: 100,
        callActivityId: 50,
      });

      const state = fakeState({
        entities: {
          callNotes: {
            21: fakeCallNote21,
            100: fakeCallNote100,
          },
        },
      });

      expect(mapStateToProps(state, { activityId: 50 }))
      .toEqual(jasmine.objectContaining({
        callNotes: [
          fakeCallNote21,
          fakeCallNote100,
        ],
      }));
    });
  });
});
