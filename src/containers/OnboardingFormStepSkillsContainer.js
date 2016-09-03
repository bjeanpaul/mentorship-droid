import { connect } from 'react-redux';
import Skills from 'src/views/OnboardingFormStepSkills';
import { updateProfile } from 'src/actions/onboarding';


export default connect(
  (state) => ({
    skills: state.onboarding.profile.skills,
  }),
  { onChangeText: updateProfile }
)(Skills);
