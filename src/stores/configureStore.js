import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { getContext } from 'src/stores/helpers';
import contextMiddleware from 'src/stores/contextMiddleware';
import chainMiddleware from 'src/stores/chainMiddleware';
import rootReducer from 'src/reducers';
import routeActions from 'src/actions/routes';


export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      contextMiddleware(getContext),
      chainMiddleware(routeActions),
      thunkMiddleware,
    )
  );
}
