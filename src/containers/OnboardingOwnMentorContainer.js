import { connect } from 'react-redux';
import OnboardingOwnMentor from 'src/views/OnboardingOwnMentor';
import { updateProfile } from 'src/actions/onboarding';
import { popRoute, pushOnboardingThreeWords } from 'src/actions/navigation';

export default connect(
  (state) => ({
    ownMentor: state.onboarding.ownMentor,
  }),
  {
    onChangeText: updateProfile,
    onBackPress: popRoute,
    onNextPress: pushOnboardingThreeWords,
  }
)(OnboardingOwnMentor);
