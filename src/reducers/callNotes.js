import { combineReducers } from 'redux';

import * as constants from 'src/constants/callNotes';
import { AUTH_LOGOUT } from 'src/constants/auth';


export const createInitialState = () => ({
});


const callNote = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
    case constants.CALL_NOTE_CREATE_OPEN:
    case constants.CALL_NOTE_RETROACTIVELY_CREATE_OPEN:
      return createInitialState();

    // TODO remove once we no longer have a duplicates issue
    case constants.CALL_NOTE_CREATE_REQUEST:
      return {
        ...state,
        isSending: true,
      };

    case constants.CALL_NOTES_CHANGE_CALL_NOTE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

const metadata = (state = {}, action) => {
  switch (action.type) {
    case constants.CALL_NOTE_RETROACTIVELY_CREATE_OPEN:
      return {
        ...state,
        actionType: constants.ADD_RETROACTIVELY,
      };

    case constants.CALL_NOTE_CREATE_OPEN:
      return {
        ...state,
        actionType: constants.ADD_IMMEDIATE,
      };

    default:
      return state;
  }
};


export default combineReducers({
  callNote,
  metadata,
});
