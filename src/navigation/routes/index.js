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
      return <CameraRollContainer />


    default:
      return <NotFound />;
  }
};

export default routes;
//
// const mapRouteToComponent = (key) => {
//   switch (key) {
//     case constants.ONBOARDING_ROUTE_HELLO:
//       return <Welcome />;
//     case constants.ONBOARDING_ROUTE_PROFILE_PICTURE:
//       return <ProfilePicture />;
//     case constants.ONBOARDING_ROUTE_CAMERA_ROLL:
//       return <CameraRoll />;
//     default:
//       return <NotFound />;
//   }
// };
// export default mapRouteToComponent;
//
//
// import React from 'react';
// import * as constants from 'src/navigation/auth/constants';
//
// import NotFound from 'src/components/NotFound';
// import LoginContainer from 'src/auth/LoginContainer';
// import ActivationContainer from 'src/auth/ActivationContainer';
// import ResetPasswordContainer from 'src/auth/ResetPasswordContainer';
//
// const mapRouteToComponent = (key) => {
//   switch (key) {
//     case constants.AUTH_ROUTE_LOGIN:
//       return <LoginContainer />;
//     case constants.AUTH_ROUTE_ACTIVATE:
//       return <ActivationContainer />;
//     case constants.AUTH_ROUTE_RESET_PASSWORD:
//       return <ResetPasswordContainer />;
//     default:
//       return <NotFound />;
//   }
// };
// export default mapRouteToComponent;
