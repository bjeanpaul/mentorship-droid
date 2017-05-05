import { mapStateToProps } from 'src/containers/CallNoteDetailContainer';
import {
  fakeState,
  fakeCallNote,
  fakeCallNoteV2,
  fakeCall,
  fakeActivity,
} from 'app/scripts/helpers';


describe('CallNoteDetailContainer', () => {
  describe('mapStateToProps', () => {
    const call = fakeCall({ id: 15 });
    let callNote = fakeCallNote({
      id: 21,
      call: 15,
    });
    const activity = fakeActivity({
      id: 50,
      objective: 'Let us make a Snowflake',
      icon: 'http://icon.of.snowflake.com',
    });

    it('should provide the version 1 call note', () => {
      const state = fakeState({
        entities: {
          callNotes: {
            21: callNote,
          },
          calls: {
            15: call,
          },
        },
      });

      expect(mapStateToProps(state, { callNoteId: 21 }))
        .toEqual(jasmine.objectContaining({
          callNote,
          call,
        }));
    });

    it('should provide the version 2 call note', () => {
      callNote = fakeCallNoteV2({
        id: 21,
        call: 15,
      });
      const state = fakeState({
        entities: {
          callNotes: {
            21: callNote,
          },
          calls: {
            15: call,
          },
        },
      });

      expect(mapStateToProps(state, { callNoteId: 21 }))
        .toEqual(jasmine.objectContaining({
          callNote,
          call,
        }));
    });

    it('should provide the activity with call note version 1', () => {
      callNote.callActivity = 50;

      const state = fakeState({
        entities: {
          calls: {
            15: call,
          },
          callNotes: {
            21: callNote,
          },
          activities: {
            50: activity,
          },
        },
      });

      expect(mapStateToProps(state, { callNoteId: 21 }))
        .toEqual(jasmine.objectContaining({ activity }));
    });

    it('should provide the activity with call note version 2', () => {
      callNote = fakeCallNoteV2({
        id: 21,
        call: 15,
        callActivity: 50,
      });

      const state = fakeState({
        entities: {
          calls: {
            15: call,
          },
          callNotes: {
            21: callNote,
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
