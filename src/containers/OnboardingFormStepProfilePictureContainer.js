import { connect } from 'react-redux';
import OnboardingFormStepProfilePicture
  from 'src/views/OnboardingFormStepProfilePicture';
import { chooseProfilePicture } from 'src/actions/onboarding';


export default connect(
  state => ({ imagePath: state.onboarding.profile.profilePicture }),
  { onChoosePhotoPress: chooseProfilePicture }
)(OnboardingFormStepProfilePicture);
