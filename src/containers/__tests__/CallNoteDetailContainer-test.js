import { mapStateToProps } from 'src/containers/CallNoteDetailContainer';
import { fakeState, fakeCallNote, fakeActivity } from 'app/scripts/helpers';


describe('CallNoteDetailContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the call note', () => {
      const callNote = fakeCallNote({ id: 21 });

      const state = fakeState({
        entities: {
          callNotes: {
            21: callNote,
          },
        },
      });

      expect(mapStateToProps(state, { callNoteId: 21 }))
        .toEqual(jasmine.objectContaining({ callNote }));
    });

    it('should provide the activity', () => {
      const activity = fakeActivity({
        id: 50,
        objective: 'Let us make a Snowflake',
        icon: 'http://icon.of.snowflake.com',
      });

      const state = fakeState({
        entities: {
          callNotes: {
            21: fakeCallNote({
              id: 21,
              callActivity: 50,
            }),
          },
          activities: {
            50: activity,
          },
        },
      });

      expect(mapStateToProps(state, { callNoteId: 21 }))
        .toEqual(jasmine.objectContaining({ activity }));
    });
  });
});
