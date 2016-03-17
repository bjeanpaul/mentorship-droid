import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import user from '../reducers/user';
import training from '../reducers/training';
import schedule from '../schedule/ScheduleReducer';

import callAPIMiddleware from './callAPIMiddleware';

const rootReducer = combineReducers({
  user,
  training,
  schedule,
});

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      callAPIMiddleware
    )
  );
}
