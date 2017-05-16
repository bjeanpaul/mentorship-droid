import * as api from 'src/api';
import * as constants from 'src/constants/callNotes';

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
export const createCallNoteWithMentor = (data, fn = createCallNote) => {
  return (dispatch, ctx, ...xargs) => fn({
    ...data,
    mentor: ctx.profile.id,
  })(dispatch, ctx, ...xargs);
};


export const openCreateCallNote = ({ callId }) => ({
  type: constants.CALL_NOTE_CREATE_OPEN,
  payload: { callId },
});

export const openRetroactivelyCreateCallNote = ({ callId }) => ({
  type: constants.CALL_NOTE_RETROACTIVELY_CREATE_OPEN,
  payload: { callId },
});


export const stepForward = () => ({
  type: constants.CALL_NOTES_STEP_FORWARD,
});


export const stepBack = () => ({
  type: constants.CALL_NOTES_STEP_BACK,
});


export const changeCallNote = payload => ({
  type: constants.CALL_NOTES_CHANGE_CALL_NOTE,
  payload,
});


export const chooseCallNote = callNoteId => ({
  type: constants.CALL_NOTE_CHOOSE,
  payload: { callNoteId },
});


export const viewAllCallNotes = staticAction(constants.CALL_NOTES_VIEW_ALL);


export const v2StepNext = () => ({
  type: constants.V2_STEP_NEXT,
});


export const v2StepBack = () => ({
  type: constants.V2_STEP_BACK,
});


export const overrideCallNoteActivity = () => ({
  type: constants.CALL_NOTE_ACTIVITY_OVERRIDE,
});


export const chooseCallNoteCategory = categoryId => ({
  type: constants.CALL_NOTE_CATEGORY_CHOOSE,
  payload: { categoryId },
});


export const chooseCallNoteActivity = activityId => ({
  type: constants.CALL_NOTE_ACTIVITY_CHOOSE,
  payload: { activityId },
});
