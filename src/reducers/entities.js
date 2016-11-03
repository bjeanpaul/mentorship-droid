import { includes } from 'lodash';
import merge from 'lodash/merge';
import { AUTH_LOGOUT } from 'src/constants/auth';
import { ACTIONS_WITH_ENTITIES } from 'src/constants/entities';


const entitiesReducer = (state = {
  activities: {},
  categories: {},
  scheduledCalls: {},
  callNotes: {},
  calls: {},
}, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return {
        ...state,
        activities: {},
        categories: {},
      };
    default:
      return includes(ACTIONS_WITH_ENTITIES, action.type)
        ? merge(state, action.payload.entities)
        : state;
  }
};


export default entitiesReducer;
