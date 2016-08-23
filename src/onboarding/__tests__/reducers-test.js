import reduce from 'src/onboarding/reducer';
import * as constants from 'src/onboarding/constants';


describe('onboarding/reducer', () => {
  describe('ONBOARDING_CHANGE_PROFILE', () => {
    it('should update profilePicture', () => {
      const { profilePicture } = reduce(void 0,
        {
          type: constants.ONBOARDING_CHANGE_PROFILE,
          payload: {
            profilePicture: 'path/to/image.png',
          },
        }
      );

      expect(profilePicture).toEqual('path/to/image.png');
    });
  });
});
