import { mapStateToProps } from 'src/containers/CallNoteListContainer';
import { fakeState, fakeCallNote } from 'app/scripts/helpers';


describe('CallNoteListContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide all call notes', () => {
      const callNote1 = fakeCallNote({ id: 21 });
      const callNote2 = fakeCallNote({ id: 100 });

      const state = fakeState({
        entities: {
          callNotes: {
            21: callNote1,
            100: callNote2,
          },
        },
      });

      expect(mapStateToProps(state, {}))
        .toEqual(jasmine.objectContaining({
          callNotes: [
            callNote1,
            callNote2,
          ],
        }));
    });

    it('should provide all call notes for the given activity', () => {
      const callNote1 = fakeCallNote({
        id: 21,
        callActivity: 50,
      });

      const callNote2 = fakeCallNote({
        id: 100,
        callActivity: 50,
      });

      const state = fakeState({
        entities: {
          callNotes: {
            21: callNote1,
            23: fakeCallNote({
              id: 100,
              callActivity: 20,
            }),
            100: callNote2,
          },
        },
      });

      expect(mapStateToProps(state, { activityId: 50 }))
        .toEqual(jasmine.objectContaining({
          callNotes: [
            callNote1,
            callNote2,
          ],
        }));
    });
  });
});
