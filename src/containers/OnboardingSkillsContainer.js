import { connect } from 'react-redux';
import OnboardingSkills from 'src/views/OnboardingSkills';
import { updateProfile } from 'src/actions/onboarding';
import { popRoute, pushOnboardingDone } from 'src/actions/navigation';

export default connect(
  (state) => ({
    skills: state.onboarding.skills,
  }),
  {
    onChangeText: updateProfile,
    onBackPress: popRoute,
    onNextPress: pushOnboardingDone,
  }
)(OnboardingSkills);
