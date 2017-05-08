import { merge } from 'lodash/fp';
import { combineReducers } from 'redux';

import { createStack } from 'src/navigationHelpers';
import * as constants from 'src/constants/callNotes';
import { AUTH_LOGOUT } from 'src/constants/auth';


export const createInitialState = () => ({
  callNote: { version: 2 },
  metadata: {},
  step: createStack(),
});


export default (state, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return createInitialState();

    case constants.CALL_NOTE_CREATE_OPEN:
      return merge(createInitialState(), {
        metadata: {
          actionType: constants.ADD_IMMEDIATE,
        },
      });

    case constants.CALL_NOTE_RETROACTIVELY_CREATE_OPEN:
      return merge(createInitialState(), {
        metadata: {
          actionType: constants.ADD_RETROACTIVELY,
        },
      });

    // TODO remove once we no longer have a duplicates issue
    case constants.CALL_NOTE_CREATE_REQUEST:
      return merge(state, {
        callNote: {
          isSending: true,
        },
      });

    case constants.CALL_NOTES_CHANGE_CALL_NOTE:
        return merge(state, {
          callNote: action.payload,
        });

    default:
      return state;
  }
};
