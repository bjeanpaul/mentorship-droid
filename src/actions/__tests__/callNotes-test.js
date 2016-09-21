import * as actions from 'src/actions/callNotes';
import * as constants from 'src/constants/callNotes';


describe('actions/callNotes', () => {
  describe('newCallNotes', () => {
    it('should create an action for new call notes', () => {
      expect(actions.newCallNotes(23)).toEqual({
        type: constants.CALL_NOTES_NEW,
        payload: { callId: 23 },
      });
    });
  });
});
