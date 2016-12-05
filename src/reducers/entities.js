import { includes, omit, merge } from 'lodash';
import { AUTH_LOGOUT } from 'src/constants/auth';
import { MESSAGE_SEND_SUCCESS } from 'src/constants/messages';
import { ACTIONS_WITH_ENTITIES } from 'src/constants/entities';


const entitiesReducer = (state = {
  activities: {},
  categories: {},
  scheduledCalls: {},
  callNotes: {},
  calls: {},
  messages: {},
  pendingMessages: {},
}, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return {
        ...state,
        activities: {},
        categories: {},
      };

    case MESSAGE_SEND_SUCCESS: {
      const nextState = {
        ...state,
        pendingMessages: omit(state.pendingMessages, action.payload.pendingId),
      };

      return merge({}, nextState, action.payload.entities);
    }

    default:
      return includes(ACTIONS_WITH_ENTITIES, action.type)
        ? merge({}, state, action.payload.entities)
        : state;
  }
};


export default entitiesReducer;
