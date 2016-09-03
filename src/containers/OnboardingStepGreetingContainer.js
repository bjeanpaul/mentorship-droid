import { connect } from 'react-redux';
import OnboardingStepGreeting from 'src/views/OnboardingStepGreeting';
import { stepForward } from 'src/actions/onboarding';


export default connect(
  state => ({
    firstName: state.onboarding.profile.firstName,
  }), {
    onCompleteProfilePress: stepForward,
  }
)(OnboardingStepGreeting);
