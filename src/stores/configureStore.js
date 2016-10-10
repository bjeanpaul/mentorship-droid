import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AsyncStorage } from 'react-native';

import { getContext } from 'src/stores/helpers';
import contextMiddleware from 'src/stores/contextMiddleware';
import chainMiddleware from 'src/stores/chainMiddleware';
import rootReducer from 'src/reducers';
import effects from 'src/effects';


export default function configureStore(initialState = {}) {
  const reduce = (state, action) => (
    action.type === 'hydrate'
      ? action.payload.state
      : rootReducer(state, action));

  const store = createStore(
    reduce,
    initialState,
    applyMiddleware(
      chainMiddleware(effects),
      contextMiddleware(getContext),
      thunkMiddleware,
    )
  );

  store.subscribe(() => {
    AsyncStorage.setItem('debug:mentorship', JSON.stringify(store.getState()));
  });

  // AsyncStorage.setItem('debug:mentorship', '');

  AsyncStorage.getItem('debug:mentorship')
    .then(v => {
      if (v) {
        const state = JSON.parse(v);

        // (state.navigation.top = {
        //   index: 0,
        //   routes: [
        //     {
        //       key: 'ROUTE_CREATE_CALL_NOTES',
        //     },
        //   ],
        // });
        store.dispatch({
          type: 'hydrate',
          payload: {
            state,
          },
        });
      }
    });

  return store;
}
