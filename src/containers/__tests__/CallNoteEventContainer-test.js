import { mapStateToProps } from 'src/containers/CallNoteEventContainer';
import { fakeState, fakeEvent, fakeCallNote } from 'app/scripts/helpers';


describe('CallNoteEventContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the call note', () => {
      const event = fakeEvent({ objectId: 23 });
      const callNote = fakeCallNote({ id: 23 });

      const state = fakeState({
        entities: {
          callNotes: {
            23: callNote,
          },
        },
      });

      expect(mapStateToProps(state, event)).toEqual(jasmine.objectContaining({
        callNote,
      }));
    });

    it('should provide the event', () => {
      const event = fakeEvent({ objectId: 23 });

      const state = fakeState({
        entities: {
          callNotes: {
            23: fakeCallNote({ id: 23 })
          },
        },
      });

      expect(mapStateToProps(state, event)).toEqual(jasmine.objectContaining({
        event,
      }));
    });
  });
});
