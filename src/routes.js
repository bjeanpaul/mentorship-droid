import { fromPairs } from 'lodash';
import * as constants from 'src/constants/routes';

import LandingContainer from 'src/containers/LandingContainer';
import LoginContainer from 'src/containers/LoginContainer';
import ActivationContainer from 'src/containers/ActivationContainer';


import WelcomeContainer from 'src/containers/WelcomeContainer';
import ProfilePictureContainer from 'src/containers/ProfilePictureContainer';
import CameraRollContainer from 'src/containers/CameraRollContainer';
import OnboardingOccupationContainer from 'src/containers/OnboardingOccupationContainer';
import OnboardingMotivationContainer from 'src/containers/OnboardingMotivationContainer';
import OnboardingOwnMentorContainer from 'src/containers/OnboardingOwnMentorContainer';
import OnboardingThreeWordsContainer from 'src/containers/OnboardingThreeWordsContainer';
import OnboardingSkillsContainer from 'src/containers/OnboardingSkillsContainer';


export default fromPairs([
  [constants.ROUTE_LANDING, LandingContainer],

  [constants.ROUTE_AUTH_ACTIVATION, ActivationContainer],
  [constants.ROUTE_AUTH_LOGIN, LoginContainer],

  [constants.ROUTE_ONBOARDING_WELCOME, WelcomeContainer],
  [constants.ROUTE_ONBOARDING_PROFILE_PICTURE, ProfilePictureContainer],
  [constants.ROUTE_ONBOARDING_CAMERA_ROLL, CameraRollContainer],
  [constants.ROUTE_ONBOARDING_OCCUPATION, OnboardingOccupationContainer],
  [constants.ROUTE_ONBOARDING_MOTIVATION, OnboardingMotivationContainer],
  [constants.ROUTE_ONBOARDING_OWN_MENTOR, OnboardingOwnMentorContainer],
  [constants.ROUTE_ONBOARDING_THREE_WORDS, OnboardingThreeWordsContainer],
  [constants.ROUTE_ONBOARDING_SKILLS, OnboardingSkillsContainer],
]);
