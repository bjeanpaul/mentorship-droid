import * as actions from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';


describe('actions/navigation', () => {
  describe('navigateBack', () => {
    it('should create an action for navigating back', () => {
      expect(actions.navigateBack()).toEqual({
        type: constants.NAVIGATE_BACK_REQUEST,
      });
    });
  });

  describe('navigateForward', () => {
    it('should create an action for navigating forward', () => {
      expect(actions.navigateForward()).toEqual({
        type: constants.NAVIGATE_FORWARD_REQUEST,
      });
    });
  });

  describe('changeNavTab', () => {
    it('should create an action for changing the nav tab', () => {
      expect(actions.changeNavTab(constants.NAV_TAB_ACTIVITIES)).toEqual({
        type: constants.NAV_TAB_CHANGE,
        payload: { tab: constants.NAV_TAB_ACTIVITIES },
      });
    });
  });
});
