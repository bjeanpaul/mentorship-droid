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

import {
  listCallNotes,
  createCallNote,
  updateCallNote,
  patchCallNote,
} from 'src/actions/callNote';

const { ApiResponseError } = api;


describe('actions/callNote', () => {
  describe('listCallNotes', () => {
    it('should create actions for call note api lists', () => {
      expect(isEqual(listCallNotes, apiAction({
        method: api.listCallNotes,
        request: staticAction(constants.CALL_NOTE_LIST_REQUEST),
        success: dataAction(constants.CALL_NOTE_LIST_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_LIST_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('createCallNote', () => {
    it('should create actions for call notes api creates', () => {
      expect(isEqual(createCallNote, apiAction({
        method: api.createCallNote,
        request: staticAction(constants.CALL_NOTE_CREATE_REQUEST),
        success: dataAction(constants.CALL_NOTE_CREATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_CREATE_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('updateCallNote', () => {
    it('should create actions for call notes api updates', () => {
      expect(isEqual(updateCallNote, apiAction({
        method: api.updateCallNote,
        request: staticAction(constants.CALL_NOTE_UPDATE_REQUEST),
        success: dataAction(constants.CALL_NOTE_UPDATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_UPDATE_FAILURE)]],
      }))).toBe(true);
    });
  });

  describe('patchCallNote', () => {
    it('should create actions for call notes api patchs', () => {
      expect(isEqual(patchCallNote, apiAction({
        method: api.patchCallNote,
        request: staticAction(constants.CALL_NOTE_PATCH_REQUEST),
        success: dataAction(constants.CALL_NOTE_PATCH_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_PATCH_FAILURE)]],
      }))).toBe(true);
    });
  });
});