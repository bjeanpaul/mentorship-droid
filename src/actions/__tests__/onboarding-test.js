import * as actions from 'src/actions/onboarding';
import * as constants from 'src/constants/onboarding';


describe('actions/onboarding', () => {
  describe('navigation', () => {
    it('should create an action for stepping back', () => {
      expect(actions.stepBack()).toEqual({
        type: constants.ONBOARDING_STEP_BACK_REQUEST,
      });
    });

    it('should create an action for stepping forward', () => {
      expect(actions.stepForward()).toEqual({
        type: constants.ONBOARDING_STEP_FORWARD_REQUEST,
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
          profilePictureUploadPath: 'path/to/image.png',
        },
      });
    });
  });

  describe('changeProfile', () => {
    it('should create an action for profile change', () => {
      expect(actions.changeProfile({
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
