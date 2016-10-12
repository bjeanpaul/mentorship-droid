jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));


import { isEqual } from 'lodash';
import * as constants from 'src/constants/callNote';
import * as api from 'src/api';

import {
  apiAction,
  staticAction,
  dataAction,
} from 'src/actionHelpers';

import * as actions from 'src/actions/callNote';
import { capture, fakeContext, fakeCallNote } from 'app/scripts/helpers';

const { ApiResponseError } = api;


describe('actions/callNote', () => {
  describe('listCallNotes', () => {
    it('should create actions for call note api lists', () => {
      expect(isEqual(actions.listCallNotes, apiAction({
        method: api.listCallNotes,
        request: staticAction(constants.CALL_NOTE_LIST_REQUEST),
        success: dataAction(constants.CALL_NOTE_LIST_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_LIST_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('createCallNote', () => {
    it('should create actions for call notes api creates', () => {
      expect(isEqual(actions.createCallNote, apiAction({
        method: api.createCallNote,
        request: staticAction(constants.CALL_NOTE_CREATE_REQUEST),
        success: dataAction(constants.CALL_NOTE_CREATE_SUCCESS),
      }))).toBe(true);
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

  describe('updateCallNote', () => {
    it('should create actions for call notes api updates', () => {
      expect(isEqual(actions.updateCallNote, apiAction({
        method: api.updateCallNote,
        request: staticAction(constants.CALL_NOTE_UPDATE_REQUEST),
        success: dataAction(constants.CALL_NOTE_UPDATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_UPDATE_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('patchCallNote', () => {
    it('should create actions for call notes api patchs', () => {
      expect(isEqual(actions.patchCallNote, apiAction({
        method: api.patchCallNote,
        request: staticAction(constants.CALL_NOTE_PATCH_REQUEST),
        success: dataAction(constants.CALL_NOTE_PATCH_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_PATCH_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('openCreateCallNote', () => {
    it('should create an action for new call notes', () => {
      expect(actions.openCreateCallNote({
        callId: 23,
        activityId: 22,
      })).toEqual({
        type: constants.CALL_NOTE_CREATE_OPEN,
        payload: {
          callId: 23,
          activityId: 22,
        },
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
});
