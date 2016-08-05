import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import merge from 'lodash/merge';

import HTTPRequestMiddleware from './HTTPRequestMiddleware';
import { getAuthorizationToken as getAuthorizationHeaderValue }
  from 'src/configuration';
const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue,
});

import auth from 'src/auth/reducer';
import profile from 'src/profile/Reducer';
import schedule from 'src/schedule/Reducer';


const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return merge(state, action.payload.entities);
  }
  return state;
};

const rootReducer = combineReducers({
  entities,
  auth,
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
