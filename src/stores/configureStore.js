import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import mentor from 'src/mentor/Reducer';
import profile from 'src/profile/Reducer';

import HTTPRequestMiddleware from './HTTPRequestMiddleware';

const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue: (state) => state.mentor.login.authToken,
});

const rootReducer = combineReducers({
  auth: mentor,
  profile,
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
