import React from 'react';

import NotFound from 'src/components/NotFound';
import LandingContainer from 'src/onboarding/LandingContainer';
import LoginContainer from 'src/auth/LoginContainer';
import ActivationContainer from 'src/auth/ActivationContainer';

import WelcomeContainer from 'src/onboarding/WelcomeContainer';
import ProfilePictureContainer from 'src/onboarding/ProfilePictureContainer';
import CameraRollContainer from 'src/onboarding/CameraRollContainer';


const COMPONENT_ROUTES = {
  ROUTE_LANDING: ActivationContainer,

  ROUTE_AUTH_ACTIVATION: ActivationContainer,
  ROUTE_AUTH_LOGIN: LoginContainer,

  ROUTE_ONBOARDING_WELCOME: WelcomeContainer,
  ROUTE_ONBOARDING_PROFILE_PICTURE: ProfilePictureContainer,
  ROUTE_ONBOARDING_CAMERA_ROLL: CameraRollContainer,
};


const router = key => {
  const Container = COMPONENT_ROUTES[key] || NotFound;
  return <Container />;
};
router.COMPONENT_ROUTES = COMPONENT_ROUTES;

export default router;
