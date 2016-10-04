import { mapStateToProps } from 'src/containers/CallNoteDetailContainer';
import { fakeState, fakeCallNote, fakeActivity } from 'app/scripts/helpers';


describe('CallNoteDetailContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide all call notes', () => {
      const fakeCallNote21 = fakeCallNote({
        id: 21,
        callActivity: 50,
        reflection: 'It was B-O-R-I-N-G',
        menteeState: 'fine',
        objectiveAchieved: false,
        activityHelpful: 'Somewhat',
        callStartTime: '2010-10-10T10:10Z',
      });
      const fakeActivity50 = fakeActivity({
        id: 50,
        objective: 'Let us make a Snowflake',
        icon: 'http://icon.of.snowflake.com',
      });

      const state = fakeState({
        entities: {
          callNotes: {
            21: fakeCallNote21,
          },
          activities: {
            50: fakeActivity50,
          },
        },
      });

      expect(mapStateToProps(state, { callNoteId: 21 }))
      .toEqual({
        reflection: 'It was B-O-R-I-N-G',
        mood: 'fine',
        completed: false,
        rating: 'Somewhat',
        time: '2010-10-10T10:10Z',
        objective: 'Let us make a Snowflake',
        icon: 'http://icon.of.snowflake.com',
      });
    });
  });
});
