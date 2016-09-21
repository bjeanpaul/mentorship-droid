import { mapDispatchToProps } from 'src/containers/CallCompletedContainer';
import { createCallNotes } from 'src/actions/callNotes';


describe('CallCompletedContainer', () => {
  describe('mapDispatchToProps', () => {
    it('map onAddCallNotesPressed to dispatch CALL_NOTES_CREATE', () => {
      const dispatch = jest.fn();
      const { onAddCallNotesPressed } = mapDispatchToProps(dispatch, { callId: 23 });

      expect(dispatch.mock.calls).toEqual([]);
      onAddCallNotesPressed();
      expect(dispatch.mock.calls).toEqual([[createCallNotes(23)]]);
    });
  });
});
