import { includes, omit, fromPairs } from 'lodash';
import { merge } from 'lodash/fp';
import { AUTH_LOGOUT } from 'src/constants/auth';
import { MESSAGE_SEND_SUCCESS } from 'src/constants/messages';
import { ACTIONS_WITH_ENTITIES } from 'src/constants/entities';
import { CALL_NOTE_CREATE_SUCCESS } from 'src/constants/callNotes';


export const createInitialState = () => ({
  activities: {},
  categories: {},
  scheduledCalls: {},
  callNotes: {},
  calls: {},
  messages: {},
  pendingMessages: {},
});


const mergeActionEntities = (state, action) => {
  return includes(ACTIONS_WITH_ENTITIES, action.type)
    ? merge(state, action.payload.entities)
    : state;
};


const entitiesReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return createInitialState();

    case MESSAGE_SEND_SUCCESS: {
      return {
        ...state,
        pendingMessages: omit(state.pendingMessages, action.payload.pendingId),
      };
    }

    case CALL_NOTE_CREATE_SUCCESS: {
      const { payload } = action;

      const {
        callActivity,
        objectiveAchieved,
      } = payload.entities.callNotes[payload.result];

      return callActivity && objectiveAchieved
        ? merge(state, {
          activities: fromPairs([
            [callActivity, { isComplete: true }],
          ]),
        })
        : state;
    }

    default:
      return state;
  }
};


export default (state = createInitialState(), action) =>
  mergeActionEntities(entitiesReducer(state, action), action);
