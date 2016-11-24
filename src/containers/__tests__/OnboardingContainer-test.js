import { mapStateToProps } from 'src/containers/OnboardingContainer';

import { getAuthUserProfile } from 'src/stores/helpers';
import { createStack } from 'src/navigationHelpers';
import { fakeState } from 'app/scripts/helpers';


describe('OnboardingContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide current profile data', () => {
      const state = fakeState({
        onboarding: {
          profile: { inspiration: 'mos def' },
        },
      });

      const { profile } = mapStateToProps(state);

      expect(profile).toEqual({
        ...getAuthUserProfile(state),
        inspiration: 'mos def',
      });
    });

    it('should provide the current onboarding navigation state', () => {
      const navigationState = createStack();

      const state = fakeState({
        onboarding: {
          navigation: navigationState,
        },
      });

      const { navigationState: navigationStateRes } = mapStateToProps(state);
      expect(navigationStateRes).toEqual(navigationState);
    });
  });
});
