import { connect } from 'react-redux';
import OnboardingFormStepOccupation from 'src/views/OnboardingFormStepOccupation';
import { updateProfile } from 'src/actions/onboarding';


export default connect(
  (state) => ({
    jobTitle: state.onboarding.profile.jobTitle,
    jobSector: state.onboarding.profile.jobSector,
  }),
  { onChangeText: updateProfile }
)(OnboardingFormStepOccupation);
