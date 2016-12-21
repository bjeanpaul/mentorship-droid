import { connect } from 'react-redux';

import {
  changeProfile,
  setupProfile,
  openPicturePicker,
} from 'src/actions/onboarding';

import { getAuthUserProfile } from 'src/store/helpers';
import Onboarding from 'src/views/Onboarding';


export const propsToActions = {
  onChoosePhotoPress: openPicturePicker,
  onChange: changeProfile,
  onDonePress: setupProfile,
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
