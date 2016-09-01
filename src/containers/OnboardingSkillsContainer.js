import { noop } from 'lodash';
import { connect } from 'react-redux';
import OnboardingSkills from 'src/views/OnboardingSkills';
import { updateProfile } from 'src/actions/onboarding';
import { navigateBack } from 'src/actions/navigation';

export default connect(
  (state) => ({
    skills: state.onboarding.skills,
  }),
  {
    onChangeText: updateProfile,
    onBackPress: navigateBack,
    onNextPress: noop,
  }
)(OnboardingSkills);
