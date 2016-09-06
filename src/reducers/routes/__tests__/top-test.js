import reduce from 'src/reducers/routes/top';
import * as entry from 'src/actions/entry';
import * as sync from 'src/actions/sync';
import * as routes from 'src/constants/routes';
import { changeStack } from 'src/navigationHelpers';


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
});
