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


const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return merge(state, action.payload.entities);
  }
  return state;
};

const rootReducer = combineReducers({
  entities,
  auth,
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
