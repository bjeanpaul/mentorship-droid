import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { getContext } from 'src/store/helpers';
import contextMiddleware from 'src/store/contextMiddleware';
import chainMiddleware from 'src/store/chainMiddleware';
import rootReducer from 'src/reducers';
import effects from 'src/effects';


export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      chainMiddleware(effects),
      contextMiddleware(getContext),
      thunkMiddleware,
    )
  );
}
