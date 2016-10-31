import { includes } from 'lodash';
import merge from 'lodash/merge';
import { ACTIONS_WITH_ENTITIES } from 'src/constants/entities';


const entitiesReducer = (state = {
  activities: {},
  categories: {},
  scheduledCalls: {},
  callNotes: {},
  calls: {},
}, action) => includes(ACTIONS_WITH_ENTITIES, action.type)
  ? merge(state, action.payload.entities)
  : state;


export default entitiesReducer;
