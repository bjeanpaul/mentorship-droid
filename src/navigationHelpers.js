import { reject, last } from 'lodash';
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


export const createStack = (routes = []) => ({
  index: Math.max(routes.length - 1, 0),
  routes,
});


export const replaceAt = (state, key, route) => !has(state, route.key)
  ? _replaceAt(state, key, route)
  : state;


export const inject = (state, key, context) => ({
  ...state,
  routes: state.routes.map(route => route.key !== key
    ? route
    : {
      ...route,
      context: {
        ...route.context,
        ...context,
      },
    }),
});


export const remove = (state, key) => !has(state, key)
  ? state
  : {
    ...state,
    routes: reject(state.routes, { key }),
  };


export const replaceOrPush = (state, key, route) => has(state, key)
  ? replaceAt(state, key, route)
  : push(state, route);


export const topOf = ({ routes }) => last(routes);


export const getCurrent = stack => stack.routes[stack.index];


export const gotoIndex = (state, index) => ({
  ...state,
  index,
});
