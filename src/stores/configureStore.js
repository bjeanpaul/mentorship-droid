import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import training from '../reducers/training';
import schedule from '../schedule/ScheduleReducer';
import mentor from '../mentor/MentorReducer';

import RemoteOperationMiddleware from './RemoteOperationMiddleware';

const remoteOperationMiddleware = new RemoteOperationMiddleware({
  getAuthToken: (getState) => getState().mentor.authToken,
});

const rootReducer = combineReducers({
  mentor,
  schedule,
  training,
});

export default function configureStore(initialState = {
  mentor: { authToken: 'YWRtaW46MTIz' },
}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      remoteOperationMiddleware.apply
    )
  );
}
