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
});


// TODO remove once api doesn't need client side to figure out mentor id
export const createCallNoteWithMentor = (data, fn = createCallNote) => (dispatch, ctx) => fn({
  ...data,
  mentor: ctx.profile.id,
})(dispatch, ctx);


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


export const openCreateCallNote = ({ callId, activityId }) => ({
  type: constants.OPEN_CALL_NOTE_CREATE,
  payload: {
    callId,
    activityId,
  },
});


export const stepForward = () => ({
  type: constants.CALL_NOTES_STEP_FORWARD,
});


export const stepBack = () => ({
  type: constants.CALL_NOTES_STEP_BACK,
});


export const changeCallNote = (payload) => ({
  type: constants.CALL_NOTES_CHANGE_CALL_NOTE,
  payload,
});
