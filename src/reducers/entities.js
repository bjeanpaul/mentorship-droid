import { includes } from 'lodash';
import merge from 'lodash/merge';
import { ACTIONS_WITH_ENTITIES } from 'src/constants/actions';


const entitiesReducer = (state = {
  profile: {}
}, action) => includes(ACTIONS_WITH_ENTITIES, action.type)
  ? merge(state, action.payload.entities)
  : state;


export default entitiesReducer;
