import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import HTTPRequestMiddleware from './HTTPRequestMiddleware';
import { getAuthorizationToken as getAuthorizationHeaderValue } from 'src/configuration';

import { getContext } from 'src/stores/helpers';
import contextMiddleware from 'src/stores/contextMiddleware';
import rootReducer from 'src/reducers';


const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue,
});

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      httpRequestMiddleware.apply,
      contextMiddleware(getContext),
    )
  );
}
