import * as actions from 'src/onboarding/actions';
import * as constants from 'src/onboarding/constants';

describe('changeProfileImage', () => {
  it('should create actions for profile image change', () => {
    expect(actions.changeProfileImage('path/to/image.png')).toEqual({
      type: constants.ONBOARDING_CHANGE_PROFILE,
      payload: {
        profilePicture: 'path/to/image.png',
      },
    });
  });
});
