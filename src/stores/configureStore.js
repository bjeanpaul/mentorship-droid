import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import merge from 'lodash/merge';


import mentor from 'src/mentor/Reducer';
import profile from 'src/profile/Reducer';

import HTTPRequestMiddleware from './HTTPRequestMiddleware';

const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue: (state) => state.auth.login.authToken,
});


// this is just like a generic database thing; pew pew pew;
const entities = (state = {}, action) => {
  if (action.entities) {
    return merge(state, action.entities);
  }
  return state;
};

const rootReducer = combineReducers({
  auth: mentor,
  entities,
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
