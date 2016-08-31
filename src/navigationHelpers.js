import { NavigationExperimental } from 'react-native';

const {
  StateUtils: {
    reset,
    push,
    pop,
    back,
    forward,
  },
} = NavigationExperimental;


export const createRoute = key => ({ key });


export const insert = ({ routes, index }, route) => ({
  index: index + 1,
  routes: [].concat(
    routes.slice(0, index + 1),
    route,
    routes.slice(index + 1)),
});


export {
  reset,
  push,
  pop,
  back,
  forward,
};
