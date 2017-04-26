import reduce, { createInitialState } from 'src/reducers/callNotes';
import {
  changeCallNote,
  openCreateCallNote,
  openRetroactivelyCreateCallNote } from 'src/actions/callNotes';
import { fakeState } from 'app/scripts/helpers';
import { logout } from 'src/actions/auth';
import { ADD_RETROACTIVELY, ADD_IMMEDIATE } from 'src/constants/callNotes';


describe('reducers/callNotes', () => {
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
    it('should reset the draft call note state to the initial state', () => {
      const { callNote } = reduce(void 0, openCreateCallNote(23));
      expect(callNote)
        .toEqual({});
    });

    it('should set metadata to indicate that the call note is being created immediately', () => {
      const { metadata } = reduce(void 0, openCreateCallNote(23));
      expect(metadata)
        .toEqual({ actionType: ADD_IMMEDIATE });
    });
  });

  describe('CALL_NOTE_RETROACTIVELY_CREATE_OPEN', () => {
    it('should reset the draft call note state to the initial state', () => {
      const { callNote } = reduce(void 0, openRetroactivelyCreateCallNote(23));
      expect(callNote)
        .toEqual({});
    });

    it('should set metadata to indicate that the call note is being created retroactively', () => {
      const { metadata } = reduce(void 0, openRetroactivelyCreateCallNote(23));
      expect(metadata)
        .toEqual({ actionType: ADD_RETROACTIVELY });
    });
  });

  describe('CALL_NOTE_CREATE_REQUEST', () => {
    it('should mark the call note as sending', () => {
      const { callNote: { isSending } } = reduce(void 0, {
        type: 'CALL_NOTE_CREATE_REQUEST',
      });

      expect(isSending).toBe(true);
    });
  });

  describe('AUTH_LOGOUT', () => {
    it('should reset to initial state', () => {
      expect(reduce(fakeState().callNote, logout()))
        .toEqual(jasmine.objectContaining(createInitialState()));
    });
  });
});
