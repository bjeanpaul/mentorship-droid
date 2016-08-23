import { NavigationExperimental } from 'react-native';
const { StateUtils: NavigationStateUtils } = NavigationExperimental;
import * as constants from './constants';


const navigation = (state = {
  index: 0,
  routes: [
    { key: constants.ROUTE_AUTH_ACTIVATION },
  ],
}, action) => {
  console.log('---------------------------------------------------------');
  console.log(action);
  console.log('---------------------------------------------------------');
  switch (action.type) {


    case constants.NAVIGATION_REPLACE:
      return NavigationStateUtils.replace(state, action.payload);

    case constants.NAVIGATION_PUSH:
      if (!NavigationStateUtils.has(state, action.payload.key)) {
        return NavigationStateUtils.push(state, action.payload);
      }
      return state;

    case constants.NAVIGATION_POP:
      return NavigationStateUtils.pop(state);

    default:
      return state;
  }
};

export default navigation;
