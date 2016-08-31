import * as actions from 'src/actions/landing';
import * as constants from 'src/constants/landing';


describe('actions/landing', () => {
  describe('landingGetStarted', () => {
    it('should create an action for get started', () => {
      expect(actions.landingGetStarted()).toEqual({
        type: constants.LANDING_GET_STARTED,
      });
    });
  });

  describe('landingLogin', () => {
    it('should create an action for login', () => {
      expect(actions.landingLogin()).toEqual({
        type: constants.LANDING_LOGIN,
      });
    });
  });
});
