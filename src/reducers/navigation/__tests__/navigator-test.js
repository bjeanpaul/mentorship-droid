import reduce from 'src/reducers/navigation/navigator';
import * as navigation from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';


describe('src/reducers/navigation/navigator', () => {
  describe('NAV_TAB_CHANGE', () => {
    it('should change the active tab', () => {
      expect(reduce(void 0, navigation.changeNavTab(constants.NAV_TAB_ACTIVITIES)))
      .toEqual({
        activeTab: constants.NAV_TAB_ACTIVITIES,
      });
    });
  });
});
