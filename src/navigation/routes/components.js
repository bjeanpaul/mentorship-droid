import { fromPairs } from 'lodash';
import * as constants from 'src/navigation/constants';

import LandingContainer from 'src/onboarding/LandingContainer';
import LoginContainer from 'src/auth/LoginContainer';
import ActivationContainer from 'src/auth/ActivationContainer';
import WelcomeContainer from 'src/onboarding/WelcomeContainer';
import ProfilePictureContainer from 'src/onboarding/ProfilePictureContainer';
import CameraRollContainer from 'src/onboarding/CameraRollContainer';


export default fromPairs([
  [constants.ROUTE_LANDING, LandingContainer],
  [constants.ROUTE_AUTH_ACTIVATION, ActivationContainer],
  [constants.ROUTE_AUTH_LOGIN, LoginContainer],
  [constants.ROUTE_ONBOARDING_WELCOME, WelcomeContainer],
  [constants.ROUTE_ONBOARDING_PROFILE_PICTURE, ProfilePictureContainer],
  [constants.ROUTE_ONBOARDING_CAMERA_ROLL, CameraRollContainer],
]);
