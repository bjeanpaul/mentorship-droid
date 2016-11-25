import { combineReducers } from 'redux';
import { makeStepperNavigationReducer } from 'src/navigationHelpers';

import * as constants from 'src/constants/callNotes';

const navigation = makeStepperNavigationReducer({
  FORWARD: constants.CALL_NOTES_STEP_FORWARD,
  BACK: constants.CALL_NOTES_STEP_BACK,
});


const callNote = (state = {}, action) => {
  switch (action.type) {
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

const reduce = combineReducers({
  navigation,
  callNote,
});


export default (state = {}, action) => {
  switch (action.type) {
    case constants.CALL_NOTE_CREATE_OPEN:
      return reduce({}, action);

    default:
      return reduce(state, action);
  }
};