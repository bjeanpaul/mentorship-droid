import { includes } from 'lodash';
import merge from 'lodash/merge';
import { AUTH_LOGOUT } from 'src/constants/auth';
import { ACTIONS_WITH_ENTITIES } from 'src/constants/entities';


export const createInitialState = () => ({
  activities: {},
  categories: {},
  scheduledCalls: {},
  callNotes: {},
  calls: {},
});


const mergeActionEntities = (state, action) => {
  return includes(ACTIONS_WITH_ENTITIES, action.type)
    ? merge({}, state, action.payload.entities)
    : state;
};


const entitiesReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return createInitialState();

    default:
      return state;
  }
};


export default (state = createInitialState(), action) =>
  mergeActionEntities(entitiesReducer(state, action), action);
