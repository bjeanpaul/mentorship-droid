import { connect } from 'react-redux';
import OnboardingSkills from 'src/views/OnboardingSkills';
import { updateProfile } from 'src/actions/onboarding';
import { popRoute } from 'src/actions/navigation';
import { noop } from 'lodash';

export default connect(
  (state) => ({
    skills: state.onboarding.skills,
  }),
  {
    onChangeText: updateProfile,
    onBackPress: popRoute,
    onNextPress: noop, // TODO
  }
)(OnboardingSkills);
