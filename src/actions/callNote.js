import * as api from 'src/api';
import * as constants from 'src/constants/callNote';

import {
  apiAction,
  dataAction,
  staticAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


export const listCallNotes = apiAction({
  method: api.listCallNotes,
  request: staticAction(constants.CALL_NOTE_LIST_REQUEST),
  success: dataAction(constants.CALL_NOTE_LIST_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_LIST_FAILURE)]],
});


export const createCallNote = apiAction({
  method: api.createCallNote,
  request: staticAction(constants.CALL_NOTE_CREATE_REQUEST),
  success: dataAction(constants.CALL_NOTE_CREATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_CREATE_FAILURE)]],
});


export const updateCallNote = apiAction({
  method: api.updateCallNote,
  request: staticAction(constants.CALL_NOTE_UPDATE_REQUEST),
  success: dataAction(constants.CALL_NOTE_UPDATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_UPDATE_FAILURE)]],
});


export const patchCallNote = apiAction({
  method: api.patchCallNote,
  request: staticAction(constants.CALL_NOTE_PATCH_REQUEST),
  success: dataAction(constants.CALL_NOTE_PATCH_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.CALL_NOTE_PATCH_FAILURE)]],
});


export const createCallNotes = callId => ({
  type: constants.CALL_NOTES_CREATE,
  payload: { callId },
});
