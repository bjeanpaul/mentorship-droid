import { fromPairs } from 'lodash';
import * as constants from 'src/constants/navigation';

import LandingContainer from 'src/containers/LandingContainer';
import LoginContainer from 'src/containers/LoginContainer';
import ActivationContainer from 'src/containers/ActivationContainer';
import WelcomeContainer from 'src/containers/WelcomeContainer';
import ProfilePictureContainer from 'src/containers/ProfilePictureContainer';
import CameraRollContainer from 'src/containers/CameraRollContainer';
import OnboardingOccupationContainer from 'src/containers/OnboardingOccupationContainer';


export default fromPairs([
  [constants.ROUTE_LANDING, LandingContainer],

  [constants.ROUTE_AUTH_ACTIVATION, ActivationContainer],
  [constants.ROUTE_AUTH_LOGIN, LoginContainer],

  [constants.ROUTE_ONBOARDING_WELCOME, WelcomeContainer],
  [constants.ROUTE_ONBOARDING_PROFILE_PICTURE, ProfilePictureContainer],
  [constants.ROUTE_ONBOARDING_CAMERA_ROLL, CameraRollContainer],
  [constants.ROUTE_ONBOARDING_OCCUPATION, OnboardingOccupationContainer],
]);
