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


const entitiesReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return createInitialState();

    default:
      return includes(ACTIONS_WITH_ENTITIES, action.type)
        ? merge(state, action.payload.entities)
        : state;
  }
};


export default entitiesReducer;
