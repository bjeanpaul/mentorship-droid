import React from 'react';
import * as constants from '../constants';


import NotFound from 'src/components/NotFound';
import LandingContainer from './LandingContainer';
import LoginContainer from 'src/auth/LoginContainer';
import ActivationContainer from 'src/auth/ActivationContainer';

import WelcomeContainer from 'src/onboarding/WelcomeContainer';
import ProfilePictureContainer from 'src/onboarding/ProfilePictureContainer';
import CameraRollContainer from 'src/onboarding/CameraRollContainer';


const routes = (key) => {
  switch (key) {
    case constants.ROUTE_LANDING:
      return <LandingContainer />;


    case constants.ROUTE_AUTH_ACTIVATION:
      return <ActivationContainer />;
    case constants.ROUTE_AUTH_LOGIN:
      return <LoginContainer />;


    case constants.ROUTE_ONBOARDING_WELCOME:
      return <WelcomeContainer />;
    case constants.ROUTE_ONBOARDING_PROFILE_PICTURE:
      return <ProfilePictureContainer />;
    case constants.ROUTE_ONBOARDING_CAMERA_ROLL:
      return <CameraRollContainer />;


    default:
      return <NotFound />;
  }
};

export default routes;
