import { connect } from 'react-redux';
import ThreeWords from 'src/views/OnboardingFormStepThreeWords';
import { updateProfile } from 'src/actions/onboarding';


export default connect(
  (state) => ({
    threeWords: state.onboarding.profile.threeWords,
  }),
  { onChangeText: updateProfile }
)(ThreeWords);
