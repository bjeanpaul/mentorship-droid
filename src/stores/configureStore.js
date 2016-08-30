import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { getContext } from 'src/stores/helpers';
import contextMiddleware from 'src/stores/contextMiddleware';
import rootReducer from 'src/reducers';


export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      contextMiddleware(getContext),
      thunkMiddleware,
    )
  );
}
