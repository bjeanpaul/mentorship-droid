import reduce from 'src/reducers/navigation/navigator';
import * as actions from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';


describe('src/reducers/navigation/navigator', () => {
  describe('should switch the active tab for the action.type', () => {
    it('NAV_TAB_CHANGE_ACTIVITIES', () => {
      expect(reduce(void 0, actions.changeNavTab(constants.NAV_TAB_ACTIVITIES)))
      .toEqual({ activeTab: constants.NAV_TAB_ACTIVITIES });
    });

    it('NAV_TAB_CHANGE_CHAT', () => {
      expect(reduce(void 0, actions.changeNavTab(constants.NAV_TAB_CHAT)))
      .toEqual({ activeTab: constants.NAV_TAB_CHAT });
    });

    it('NAV_TAB_CHANGE_COMMUNITY', () => {
      expect(reduce(void 0, actions.changeNavTab(constants.NAV_TAB_COMMUNITY)))
      .toEqual({ activeTab: constants.NAV_TAB_COMMUNITY });
    });

    it('NAV_TAB_CHANGE_JOURNEY', () => {
      expect(reduce(void 0, actions.changeNavTab(constants.NAV_TAB_JOURNEY)))
      .toEqual({ activeTab: constants.NAV_TAB_JOURNEY });
    });

    it('NAV_TAB_CHANGE_SCHEDULED_CALLS', () => {
      expect(reduce(void 0, actions.changeNavTab(constants.NAV_TAB_SCHEDULED_CALLS)))
      .toEqual({ activeTab: constants.NAV_TAB_SCHEDULED_CALLS });
    });
  });
});
