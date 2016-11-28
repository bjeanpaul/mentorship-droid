import * as actions from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';


describe('actions/navigation', () => {
  describe('changeNavTab', () => {
    it('should create an action for changing the nav tab', () => {
      expect(actions.changeNavTab(constants.NAV_TAB_ACTIVITIES)).toEqual({
        type: constants.NAV_TAB_CHANGE,
        payload: { tab: constants.NAV_TAB_ACTIVITIES },
      });
    });
  });
});
