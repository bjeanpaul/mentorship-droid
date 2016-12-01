import * as actions from 'src/actions/landing';
import * as constants from 'src/constants/landing';


describe('actions/landing', () => {
  describe('showActivation', () => {
    it('should create an action for get started', () => {
      expect(actions.showActivation()).toEqual({
        type: constants.ACTIVATION_SHOW,
      });
    });
  });

  describe('showLogin', () => {
    it('should create an action for login', () => {
      expect(actions.showLogin()).toEqual({
        type: constants.LOGIN_SHOW,
      });
    });
  });
});
