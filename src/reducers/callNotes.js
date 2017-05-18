import { merge } from 'lodash/fp';
import { unary } from 'lodash';
import * as constants from 'src/constants/callNotes';
import { AUTH_LOGOUT } from 'src/constants/auth';
import {
  createStack, createRoute, forward, back, jumpToIndex,
} from 'src/navigationHelpers';


export const createInitialState = () => ({
  callNote: {
    activity: void 0,
    version: constants.CALL_NOTE_VERSION,
  },
  metadata: {
    activityHasChanged: false,
  },
  steps: void 0,
});


export const createSteps = () => {
  const steps = createStack(constants.V2_STEPS.map(unary(createRoute)));
  return jumpToIndex(steps, 0);
};


export default (state = createInitialState(), action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return createInitialState();

    case constants.CALL_NOTE_CREATE_OPEN:
      return merge(createInitialState(), {
        steps: createSteps(state),
        metadata: {
          actionType: constants.ADD_IMMEDIATE,
        },
      });

    case constants.CALL_NOTE_RETROACTIVELY_CREATE_OPEN:
      return merge(createInitialState(), {
        steps: createSteps(state),
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

    case constants.V2_STEP_BACK:
      return {
        ...state,
        steps: back(state.steps),
      };

    case constants.V2_STEP_NEXT:
      return {
        ...state,
        steps: forward(state.steps),
      };

    case constants.CALL_NOTE_ACTIVITY_CHOOSE:
      return merge(state, {
        callNote: {
          activityProgress: void 0,
          activity: action.payload.activityId,
        },
        metadata: {
          activityHasChanged: true,
        },
      });

    default:
      return state;
  }
};
