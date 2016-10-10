import { combineReducers } from 'redux';
import { makeStepperNavigationReducer } from 'src/navigationHelpers';

import * as constants from 'src/constants/callNote';

const navigation = makeStepperNavigationReducer({
  FORWARD: constants.CALL_NOTES_STEP_FORWARD,
  BACK: constants.CALL_NOTES_STEP_BACK,
});


const callNote = (state = {}, action) => {
  switch (action.type) {
    case constants.CALL_NOTES_CHANGE_CALL_NOTE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  navigation,
  callNote,
});
