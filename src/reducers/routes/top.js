import * as entry from 'src/constants/entry';
import * as sync from 'src/constants/sync';
import * as navigation from 'src/constants/navigation';
import * as routes from 'src/constants/routes';
import { changeStack } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case entry.NEW_USER_ENTER:
      return changeStack(state, routes.STACK_ONBOARDING);

    case sync.LOAD_REQUEST:
      return changeStack(state, routes.STACK_JOURNEY);

    case navigation.NAV_TAB_CHANGE: {
      const { payload: { tab } } = action;
      return changeStack(state, routes.NAV_TABS_TO_STACKS[tab]);
    }

    default:
      return state;
  }
};
