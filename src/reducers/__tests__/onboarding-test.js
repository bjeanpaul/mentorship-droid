import reduce from 'src/reducers/onboarding';
import * as constants from 'src/constants/onboarding';


describe('reducer/onboarding', () => {
  it('ONBOARDING_CHANGE_PROFILE_PICTURE', () => {
    const { profile: { profilePicture } } = reduce(void 0,
      {
        type: constants.ONBOARDING_CHANGE_PROFILE_PICTURE,
        payload: {
          profilePicture: 'path/to/image.png',
        },
      }
    );
    expect(profilePicture).toEqual('path/to/image.png');
  });

  it('ONBOARDING_CHANGE_PROFILE', () => {
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
