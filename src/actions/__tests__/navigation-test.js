import * as actions from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';


describe('actions/navigation', () => {
  describe('navigationBack', () => {
    it('should create an action for navigating back', () => {
      expect(actions.navigateBack()).toEqual({
        type: constants.NAVIGATE_BACK,
      });
    });
  });

  describe('navigationForward', () => {
    it('should create an action for navigating forward', () => {
      expect(actions.navigateForward()).toEqual({
        type: constants.NAVIGATE_FORWARD,
      });
    });
  });
});
