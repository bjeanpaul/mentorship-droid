import { connect } from 'react-redux';
import Inspiration from 'src/views/OnboardingFormStepInspiration';
import { updateProfile } from 'src/actions/onboarding';


export default connect(
  (state) => ({
    inspiration: state.onboarding.profile.inspiration,
  }),
  { onChangeText: updateProfile }
)(Inspiration);
