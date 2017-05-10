jest.mock('src/api/callNotes');

import * as constants from 'src/constants/callNotes';
import * as api from 'src/api';
import * as actions from 'src/actions/callNotes';
import { dataAction } from 'src/actionHelpers';

import {
  capture,
  fakeContext,
  fakeCallNote,
  testApiAction,
} from 'app/scripts/helpers';

const { ApiResponseError } = api;


describe('actions/callNotes', () => {
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

  describe('openRetroactivelyCreateCallNote', () => {
    it('should create an action for new call notes', () => {
      expect(actions.openRetroactivelyCreateCallNote({ callId: 23 })).toEqual({
        type: constants.CALL_NOTE_RETROACTIVELY_CREATE_OPEN,
        payload: { callId: 23 },
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
