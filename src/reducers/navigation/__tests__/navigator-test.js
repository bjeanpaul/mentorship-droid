import reduce from 'src/reducers/navigation/navigator';
import * as actions from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';


describe('src/reducers/navigation/navigator', () => {
  it('should switch the active tab to tab given by the action', () => {
    expect(reduce(void 0, actions.changeNavTab(constants.NAV_TAB_ACTIVITIES)))
      .toEqual({ activeTab: constants.NAV_TAB_ACTIVITIES });
  });
});
