import { mapDispatchToProps } from 'src/containers/CallCompletedContainer';
import { openCreateCallNote } from 'src/actions/callNote';
import { dismissScreen } from 'src/actions/navigation';


describe('CallCompletedContainer', () => {
  describe('mapDispatchToProps', () => {
    it('should map onAddCallNotesPress to dispatch OPEN_CALL_NOTE_CREATE', () => {
      const dispatch = jest.fn();
      const { onAddCallNotesPress } = mapDispatchToProps(dispatch, {
        callId: 23,
      });

      expect(dispatch.mock.calls).toEqual([]);

      onAddCallNotesPress();

      expect(dispatch.mock.calls).toEqual([[openCreateCallNote({
        callId: 23,
      })]]);
    });

    it('should map onDismissPress to dispatch SCREEN_DISMISS', () => {
      const dispatch = jest.fn();
      const { onDismissPress } = mapDispatchToProps(dispatch, { callId: 23 });

      expect(dispatch.mock.calls).toEqual([]);
      onDismissPress();
      expect(dispatch.mock.calls).toEqual([[dismissScreen()]]);
    });
  });
});
