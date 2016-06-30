import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import training from '../reducers/training';
import schedule from '../schedule/ScheduleReducer';
import mentor from '../mentor/MentorReducer';

import HTTPRequestMiddleware from './HTTPRequestMiddleware';

const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue: (state) => state.mentor.authToken,
});

const rootReducer = combineReducers({
  mentor,
  schedule,
  training,
});

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      httpRequestMiddleware.apply
    )
  );
}
