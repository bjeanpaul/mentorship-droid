import { connect } from 'react-redux';
import OnboardingOccupation from 'src/views/OnboardingOccupation';
import { updateProfile } from 'src/actions/onboarding';
import { popRoute, pushOnboardingMotivation } from 'src/actions/navigation';

export default connect(
  (state) => ({
    jobTitle: state.onboarding.jobTitle,
    jobSector: state.onboarding.jobSector,
  }),
  {
    onChangeText: updateProfile,
    onBackPress: popRoute,
    onNextPress: pushOnboardingMotivation,
  }
)(OnboardingOccupation);
