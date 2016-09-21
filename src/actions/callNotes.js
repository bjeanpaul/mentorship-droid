import * as constants from 'src/constants/callNotes';


export const newCallNotes = callId => ({
  type: constants.CALL_NOTES_NEW,
  payload: { callId },
});
