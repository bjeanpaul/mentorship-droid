import reduce from 'src/reducers/onboarding';
import * as constants from 'src/constants/onboarding';


describe('onboarding/reducer', () => {
  describe('ONBOARDING_CHANGE_PROFILE', () => {
    it('should update reducer', () => {
      const { profilePicture, jobTitle } = reduce(void 0,
        {
          type: constants.ONBOARDING_CHANGE_PROFILE,
          payload: {
            profilePicture: 'path/to/image.png',
            jobTitle: 'person',
          },
        }
      );

      expect(profilePicture).toEqual('path/to/image.png');
      expect(jobTitle).toEqual('person');
    });
  });
});
