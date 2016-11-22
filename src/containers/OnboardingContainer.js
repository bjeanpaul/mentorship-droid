import { connect } from 'react-redux';

import {
  chooseProfilePicture,
  changeProfile,
  stepBack,
  stepForward,
  save,
} from 'src/actions/onboarding';

import { getAuthUserProfile } from 'src/stores/helpers';
import Onboarding from 'src/views/Onboarding';


export const propsToActions = {
  onChoosePhotoPress: chooseProfilePicture,
  onChange: changeProfile,
  onBackPress: stepBack,
  onNextPress: stepForward,
  save,
};


export const mapStateToProps = state => {
  const { onboarding: onboardingState } = state;
  const navigationState = onboardingState.navigation;

  const profile = {
    ...getAuthUserProfile(state),
    ...onboardingState.profile,
  };

  return {
    profile,
    navigationState,
  };
};


export default connect(mapStateToProps, propsToActions)(Onboarding);
