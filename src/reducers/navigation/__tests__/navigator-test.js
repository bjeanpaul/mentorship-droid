import reduce from 'src/reducers/navigation/navigator';
import * as actions from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';


describe('src/reducers/navigation/navigator', () => {
  describe('should switch the active tab to tab given by the action', () => {
    it('NAV_TAB_CHANGE_ACTIVITIES', () => {
      expect(reduce(void 0, actions.changeNavTab(constants.NAV_TAB_ACTIVITIES)))
      .toEqual({ activeTab: constants.NAV_TAB_ACTIVITIES });
    });
  });
});
