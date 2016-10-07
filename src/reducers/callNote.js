import { combineReducers } from 'redux';
import { makeStepperNavigationReducer } from 'src/navigationHelpers';

import * as constants from 'src/constants/callNote';

const navigation = makeStepperNavigationReducer({
  FORWARD: constants.CALL_NOTES_STEP_FORWARD,
  BACK: constants.CALL_NOTES_STEP_BACK,
});


// TODO: add methods for updating a callNote.
const callNote = (state = {}, action) => {
  return state;
};


export default combineReducers({
  navigation,
  callNote,
});
