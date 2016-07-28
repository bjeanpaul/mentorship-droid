import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import merge from 'lodash/merge';

import HTTPRequestMiddleware from './HTTPRequestMiddleware';
import { getAuthorizationToken as getAuthorizationHeaderValue }
  from 'src/configuration';
const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue,
});

import mentor from 'src/mentor/Reducer';
import profile from 'src/profile/Reducer';
import schedule from 'src/schedule/Reducer';


// this is just like a generic database thing; pew pew pew;
const entities = (state = {}, action) => {
  if (action.entities) {
    console.log(merge(state, action.entities));
    return merge(state, action.entities);
  }
  return state;
};

const rootReducer = combineReducers({
  auth: mentor,
  entities,
  profile,
  schedule,
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
