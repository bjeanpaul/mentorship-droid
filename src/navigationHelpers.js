import { reject, uniqueId } from 'lodash';
import { NavigationExperimental } from 'react-native';

const {
  StateUtils: {
    has,
    reset,
    pop,
    back,
    forward,
    replaceAt: _replaceAt,
    push: _push,
  },
} = NavigationExperimental;


export {
  has,
  reset,
  pop,
  back,
  forward,
};


export const createRoute = (key, context = {}) => ({
  key,
  context,
});


export const createDummyRoute = () => createRoute(uniqueId('DUMMY_ROUTE_'));


export const insertAfterCurrent = (state, route) => !has(state, route.key)
  ? {
    index: state.index + 1,
    routes: [].concat(
      state.routes.slice(0, state.index + 1),
      route,
      state.routes.slice(state.index + 1)),
  }
  : state;


export const push = (state, route) => !has(state, route.key)
  ? _push(state, route)
  : state;


export const pushList = (state, routes) => {
  const filteredRoutes = routes.filter(({ key }) => !has(state, key));
  return {
    index: filteredRoutes.length
      ? state.index + 1
      : state.index,
    routes: state.routes.concat(filteredRoutes),
  };
};


export const popCurrent = state => ({
  index: Math.max(state.index - 1, 0),
  routes: state.routes.filter((_, i) => i !== state.index),
});


export const makeStepperNavigationReducer = ({ FORWARD, BACK }) => (state = {
  index: 0,
  routes: [
    { key: 'STEP_0' },
  ],
}, action) => {
  switch (action.type) {
    case FORWARD:
      return push(state, {
        key: `STEP_${state.index + 1}`,
      });
    case BACK:
      return pop(state);
    default:
      return state;
  }
};


export const createStack = (routes = []) => ({
  index: Math.max(routes.length - 1, 0),
  routes,
});


export const replaceAt = (state, key, route) => !has(state, route.key)
  ? _replaceAt(state, key, route)
  : state;


// We prepend a dummy route to avoid unintentional transitions
export const remove = (state, key, dummyRoute = createDummyRoute()) => !has(state, key)
  ? state
  : {
    ...state,
    routes: [dummyRoute].concat(reject(state.routes, { key })),
  };
