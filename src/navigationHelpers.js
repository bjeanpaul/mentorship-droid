import { NavigationExperimental } from 'react-native';

const {
  StateUtils: {
    has,
    reset,
    pop,
    back,
    forward,
    push: _push,
  },
} = NavigationExperimental;


export const createRoute = key => ({ key });


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


const makeStepperNavigationReducer = ({ FORWARD, BACK }) => (state = {
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
      return popCurrent(state);
    default:
      return state;
  }
};


export {
  reset,
  push,
  pop,
  back,
  forward,
  pushList,
  popCurrent,
  insertAfterCurrent,
  makeStepperNavigationReducer,
};
