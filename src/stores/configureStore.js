import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import mentor from 'src/mentor/Reducer';

import HTTPRequestMiddleware from './HTTPRequestMiddleware';

const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue: (state) => state.mentor.authToken,
});

const rootReducer = combineReducers({
  mentor,
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
