import { connect } from 'react-redux';
import OnboardingSkills from 'src/views/OnboardingSkills';
import { updateProfile } from 'src/actions/onboarding';
import { popRoute, pushOnboardingDone } from 'src/actions/navigation';

// TODO, actually save the profile instead of showing the todo screen.
// allow the chain middleware to handle the next few screens.

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
