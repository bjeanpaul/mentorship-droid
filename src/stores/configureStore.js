import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import training from '../reducers/training';
import schedule from '../schedule/ScheduleReducer';
import mentor from '../Mentor/MentorReducer';

import RemoteOperationMiddleware from './RemoteOperationMiddleware';

const requestMiddleware = new RemoteOperationMiddleware({
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
      requestMiddleware.apply
    )
  );
}
