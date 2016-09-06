import * as entry from 'src/constants/entry';
import * as sync from 'src/constants/sync';
import * as routes from 'src/constants/routes';
import { changeStack } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case entry.NEW_USER_ENTER:
      return changeStack(state, routes.STACK_ONBOARDING);

    case sync.LOAD_REQUEST:
      return changeStack(state, routes.STACK_JOURNEY);

    default:
      return state;
  }
};
