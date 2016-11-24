jest.mock('src/api/callNotes');

import * as constants from 'src/constants/callNote';
import * as api from 'src/api';
import * as actions from 'src/actions/callNote';
import { dataAction } from 'src/actionHelpers';

import {
  capture,
  fakeContext,
  fakeCallNote,
  fakeState,
  testApiAction,
} from 'app/scripts/helpers';

const { ApiResponseError } = api;


describe('actions/callNote', () => {
  describe('listCallNotes', () => {
    it('should create actions for call note api lists', async () => {
      await testApiAction(actions.listCallNotes, {
        method: api.listCallNotes,
        request: constants.CALL_NOTE_LIST_REQUEST,
        success: dataAction(constants.CALL_NOTE_LIST_SUCCESS),
        failures: [[ApiResponseError, constants.CALL_NOTE_LIST_FAILURE]],
      })();
    });
  });

  describe('createCallNote', () => {
    it('should create actions for call notes api creates', async () => {
      await testApiAction(actions.createCallNote, {
        method: api.createCallNote,
        request: constants.CALL_NOTE_CREATE_REQUEST,
        success: dataAction(constants.CALL_NOTE_CREATE_SUCCESS),
      })(fakeCallNote());
    });
  });

  describe('createCallNoteOnce', () => {
    it('should only create a call note if it isnt already sending', async () => {
      const state = fakeState();
      const getState = () => state;

      const ctx = fakeContext();
      const callNote = fakeCallNote();
      const fn = d => dispatch => dispatch(d);

      let res = await capture(actions.createCallNoteOnce(callNote, fn), ctx, getState);
      expect(res).toEqual([callNote]);

      state.callNote.callNote.isSending = true;
      res = await capture(actions.createCallNoteOnce(callNote, fn), ctx, getState);
      expect(res).toEqual([]);
    });
  });

  describe('createCallNoteWithMentor', () => {
    it('should create a call note with the authed user as the mentor', async () => {
      const ctx = fakeContext({
        profile: { id: 23 },
      });

      const callNote = fakeCallNote({ mentor: null });
      const fn = d => dispatch => dispatch(d);

      const res = await capture(actions.createCallNoteWithMentor(callNote, fn), ctx);
      expect(res).toEqual([fakeCallNote({ mentor: 23 })]);
    });
  });

  describe('openCreateCallNote', () => {
    it('should create an action for new call notes', () => {
      expect(actions.openCreateCallNote({ callId: 23 })).toEqual({
        type: constants.CALL_NOTE_CREATE_OPEN,
        payload: { callId: 23 },
      });
    });
  });

  describe('stepBack', () => {
    it('should create an action for stepping back', () => {
      expect(actions.stepBack()).toEqual({
        type: constants.CALL_NOTES_STEP_BACK,
      });
    });
  });

  describe('stepForward', () => {
    it('should create an action for stepping forward', () => {
      expect(actions.stepForward()).toEqual({
        type: constants.CALL_NOTES_STEP_FORWARD,
      });
    });
  });

  describe('changeCallNote', () => {
    it('should create an action for updating a call note', () => {
      expect(actions.changeCallNote({
        reflections: 'In the water...',
        mood: 'dispair',
      })).toEqual({
        type: constants.CALL_NOTES_CHANGE_CALL_NOTE,
        payload: {
          reflections: 'In the water...',
          mood: 'dispair',
        },
      });
    });
  });

  describe('chooseCallNote', () => {
    it('should create an actions for choosing a call note', () => {
      expect(actions.chooseCallNote(21))
        .toEqual({
          type: constants.CALL_NOTE_CHOOSE,
          payload: { callNoteId: 21 },
        });
    });
  });
});
