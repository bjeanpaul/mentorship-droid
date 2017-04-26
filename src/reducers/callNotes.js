import { combineReducers } from 'redux';

import * as constants from 'src/constants/callNotes';
import { AUTH_LOGOUT } from 'src/constants/auth';


export const createInitialState = () => ({
});


const callNote = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
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
    case constants.CALL_NOTE_DELAYED_CREATE_OPEN:
      return {
        ...state,
        actionType: 'ADD_DELAYED',
      };

    case constants.CALL_NOTE_CREATE_OPEN:
      return {
        ...state,
        actionType: 'ADD_IMMEDIATE',
      };

    default:
      return state;
  }
};


const reduce = combineReducers({
  callNote,
  metadata,
});


export default (state = createInitialState(), action) => {
  switch (action.type) {
    case constants.CALL_NOTE_CREATE_OPEN:
      return reduce(createInitialState(), action);

    default:
      return reduce(state, action);
  }
};
