import { fromPairs } from 'lodash';

import top from 'src/reducers/routes/top';
import navigation from 'src/reducers/routes/navigation';
import stackReducers from 'src/reducers/routes/stacks';
import * as routes from 'src/constants/routes';


const navigationReducer = ({
  currentStack,
  stacks,
}, action) => ({
  currentStack,
  stacks: {
    ...stacks,
    ...fromPairs([
      [currentStack, navigation(stacks[currentStack], action)],
    ]),
  },
});


const routesReducer = (inputState = {
  currentStack: routes.STACK_LANDING,
  stacks: void 0,
}, action) => {
  let state = {
    ...inputState,
    stacks: stackReducers(inputState.stacks, action),
  };

  state = top(state, action);
  state = navigationReducer(state, action);

  return state;
};


export default routesReducer;
