import { connect } from 'react-redux';
import OnboardingMotivation from 'src/views/OnboardingMotivation';
import { updateProfile } from 'src/actions/onboarding';
import { popRoute, pushOnboardingOwnMentor } from 'src/actions/navigation';

export default connect(
  (state) => ({
    jobMotivation: state.onboarding.jobMotivation,
  }),
  {
    onChangeText: updateProfile,
    onBackPress: popRoute,
    onNextPress: pushOnboardingOwnMentor,
  }
)(OnboardingMotivation);
