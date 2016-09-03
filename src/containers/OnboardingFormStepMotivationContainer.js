import { connect } from 'react-redux';
import OnboardingFormStepMotivation from 'src/views/OnboardingFormStepMotivation';
import { updateProfile } from 'src/actions/onboarding';


export default connect(
  (state) => ({
    motivation: state.onboarding.profile.motivation,
  }),
  { onChangeText: updateProfile }
)(OnboardingFormStepMotivation);
