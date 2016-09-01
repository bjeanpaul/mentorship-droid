import { connect } from 'react-redux';
import OnboardingThreeWords from 'src/views/OnboardingThreeWords';
import { updateProfile } from 'src/actions/onboarding';
import { navigateBack, navigateForward } from 'src/actions/navigation';


export default connect(
  (state) => ({
    threeWords: state.onboarding.threeWords,
  }),
  {
    onChangeText: updateProfile,
    onBackPress: navigateBack,
    onNextPress: navigateForward,
  }
)(OnboardingThreeWords);
