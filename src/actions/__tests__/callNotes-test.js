import * as actions from 'src/actions/callNotes';
import * as constants from 'src/constants/callNotes';


describe('actions/callNotes', () => {
  describe('createCallNotes', () => {
    it('should create an action for new call notes', () => {
      expect(actions.createCallNotes(23)).toEqual({
        type: constants.CALL_NOTES_CREATE,
        payload: { callId: 23 },
      });
    });
  });
});
