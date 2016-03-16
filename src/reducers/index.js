import { combineReducers } from 'redux';

import user from './user';
import training from './training';

const rootReducer = combineReducers({
  user,
  training,
});

export default rootReducer;
