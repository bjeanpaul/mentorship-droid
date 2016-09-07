import reduce from 'src/reducers/routes/top';
import * as entry from 'src/actions/entry';
import * as sync from 'src/actions/sync';
import * as navigation from 'src/actions/navigation';
import * as routes from 'src/constants/routes';
import { changeStack } from 'src/navigationHelpers';
import { NAV_TAB_ACTIVITIES } from 'src/constants/navigation';


const createState = () => ({
  currentStack: routes.STACK_LANDING,
  stacks: {},
});


describe('src/reducers/routes/top', () => {
  describe('NEW_USER_ENTER', () => {
    it('should change to the onboarding stack', () => {
      expect(reduce(createState(), entry.enterNewUser()))
        .toEqual(changeStack(createState(), routes.STACK_ONBOARDING));
    });
  });

  describe('LOAD_REQUEST', () => {
    it('should change to the journey stack', () => {
      expect(reduce(createState(), sync.loadRequest()))
        .toEqual(changeStack(createState(), routes.STACK_JOURNEY));
    });
  });

  describe('NAV_TAB_CHANGE', () => {
    it('should change to the stack corresponding to the new tab', () => {
      const action = navigation.changeNavTab(NAV_TAB_ACTIVITIES);

      expect(reduce(createState(), action))
        .toEqual(changeStack(createState(), routes.STACK_ACTIVITIES));
    });
  });
});
