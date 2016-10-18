import reduce from 'src/reducers/callNote';
import { changeCallNote, openCreateCallNote } from 'src/actions/callNote';


describe('reducers/callNote', () => {
  describe('CALL_NOTES_CHANGE_CALL_NOTE', () => {
    it('should update the current call note state with state in the payload', () => {
      const { callNote: { reflections, mood } } = reduce(void 0, changeCallNote({
        reflections: 'Cheese is amazing.',
        mood: 'savage',
      }));

      expect(reflections).toEqual('Cheese is amazing.');
      expect(mood).toEqual('savage');
    });
  });

  describe('CALL_NOTE_CREATE_OPEN', () => {
    it('should reset the state to the initial state', () => {
      expect(reduce(void 0, openCreateCallNote(23)))
        .toEqual(reduce(void 0, { type: 'FAKE' }));
    });
  });
});
