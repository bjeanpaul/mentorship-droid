import * as actions from 'src/actions/onboarding';
import * as constants from 'src/constants/onboarding';


describe('actions/onboarding', () => {
  describe('startProfile', () => {
    it('should create an action for starting a profile', () => {
      expect(actions.startProfile()).toEqual({
        type: constants.ONBOARDING_START_PROFILE,
      });
    });
  });

  describe('chooseProfilePicture', () => {
    it('should create an action for choosing a profile picture', () => {
      expect(actions.chooseProfilePicture()).toEqual({
        type: constants.ONBOARDING_CHOOSE_PROFILE_PICTURE,
      });
    });
  });

  describe('changeProfilePicture', () => {
    it('should create an action for profile image change', () => {
      expect(actions.changeProfilePicture('path/to/image.png')).toEqual({
        type: constants.ONBOARDING_CHANGE_PROFILE_PICTURE,
        payload: {
          profilePicture: 'path/to/image.png',
        },
      });
    });
  });

  describe('updateProfile', () => {
    it('should create an action for profile change', () => {
      expect(actions.updateProfile({
        jobTitle: 'Uncle',
        jobSector: 'Family',
      })).toEqual({
        type: constants.ONBOARDING_CHANGE_PROFILE,
        payload: {
          jobTitle: 'Uncle',
          jobSector: 'Family',
        },
      });
    });
  });
});
