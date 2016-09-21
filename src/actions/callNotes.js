import * as constants from 'src/constants/callNotes';


export const createCallNotes = callId => ({
  type: constants.CALL_NOTES_CREATE,
  payload: { callId },
});
