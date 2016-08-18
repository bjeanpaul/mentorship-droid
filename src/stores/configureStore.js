import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import merge from 'lodash/merge';

import HTTPRequestMiddleware from './HTTPRequestMiddleware';
import { getAuthorizationToken as getAuthorizationHeaderValue } from 'src/configuration';

import auth from 'src/auth/reducer';
import { getContext } from 'src/stores/helpers';
import initialState from 'src/stores/initialState';
import contextMiddleware from 'src/stores/contextMiddleware';

const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue,
});


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

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState(),
    applyMiddleware(
      thunkMiddleware,
      httpRequestMiddleware.apply,
      contextMiddleware(getContext),
    )
  );
}
