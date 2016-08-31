import * as actions from 'src/actions/onboarding';
import * as constants from 'src/constants/onboarding';

describe('actions/onboarding', () => {
  it('should create actions for profile image change', () => {
    expect(actions.updateProfileImage('path/to/image.png')).toEqual({
      type: constants.ONBOARDING_UPDATE_PROFILE_PICTURE,
      payload: {
        profilePicture: 'path/to/image.png',
      },
    });
  });

  it('should create actions for profile change', () => {
    expect(actions.updateProfile({
      jobTitle: 'Uncle',
      jobSector: 'Family',
    })).toEqual({
      type: constants.ONBOARDING_UPDATE_PROFILE,
      payload: {
        jobTitle: 'Uncle',
        jobSector: 'Family',
      },
    });
  });
});
