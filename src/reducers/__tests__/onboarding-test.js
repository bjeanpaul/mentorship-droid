import reduce, { createInitialState } from 'src/reducers/onboarding';
import * as constants from 'src/constants/onboarding';
import { fakeState } from 'app/scripts/helpers';
import { logout } from 'src/actions/auth';


describe('reducer/onboarding', () => {
  describe('ONBOARDING_PICTURE_CHOSEN', () => {
    it('should update the state with the action payload', () => {
      const { profile: { profilePicture } } = reduce(void 0,
        {
          type: constants.ONBOARDING_PICTURE_CHOSEN,
          payload: {
            profilePicture: 'path/to/image.png',
          },
        }
      );
      expect(profilePicture).toEqual('path/to/image.png');
    });
  });

  describe('ONBOARDING_CHANGE_PROFILE', () => {
    it('should update the state with the action payload', () => {
      const { profile: { jobTitle, jobSector } } = reduce(void 0,
        {
          type: constants.ONBOARDING_CHANGE_PROFILE,
          payload: {
            jobTitle: 'Uncle',
            jobSector: 'Family',
          },
        }
      );
      expect(jobTitle).toEqual('Uncle');
      expect(jobSector).toEqual('Family');
    });
  });

  describe('AUTH_LOGOUT', () => {
    it('should reset to initial state', () => {
      expect(reduce(fakeState().onboarding, logout()))
        .toEqual(jasmine.objectContaining(createInitialState()));
    });
  });
});
