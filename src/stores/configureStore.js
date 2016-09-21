import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { getContext } from 'src/stores/helpers';
import contextMiddleware from 'src/stores/contextMiddleware';
import chainMiddleware from 'src/stores/chainMiddleware';
import rootReducer from 'src/reducers';
import effects from 'src/effects';


import { fakeState, fakeCategory, fakeEvent } from 'app/scripts/helpers';
import {
  EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED,
} from 'src/constants/event';

const state = fakeState({
  entities: {
    categories: {
      123: fakeCategory({
        id: 123,
        image: 'http://images.are.worth.1000.words',
        title: 'Cut your ribbon',
        color: '#97c13c',
      }),
    },
    events: {
      3: fakeEvent({
        id: 3,
        eventType: EVENT_TYPE_ACTIVITIY_CATEGORY_COMPLETED,
        objectId: 123, // category
      })
    },
  },
});


export default function configureStore(initialState = state) {
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
