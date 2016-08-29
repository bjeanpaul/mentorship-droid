import reduce from 'src/reducers/onboarding';
import * as constants from 'src/constants/onboarding';


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
