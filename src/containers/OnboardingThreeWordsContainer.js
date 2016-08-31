import { connect } from 'react-redux';
import OnboardingThreeWords from 'src/views/OnboardingThreeWords';
import { updateProfile } from 'src/actions/onboarding';
import { popRoute, pushOnboardingSkills } from 'src/actions/navigation';

export default connect(
  (state) => ({
    threeWords: state.onboarding.threeWords,
  }),
  {
    onChangeText: updateProfile,
    onBackPress: popRoute,
    onNextPress: pushOnboardingSkills,
  }
)(OnboardingThreeWords);
