import React from 'react';
import * as constants from 'src/navigation/auth/constants';

import NotFound from 'src/components/NotFound';
import LandingContainer from 'src/onboarding/LandingContainer';
import LoginContainer from 'src/auth/LoginContainer';
import ActivationContainer from 'src/auth/ActivationContainer';
import ResetPasswordContainer from 'src/auth/ResetPasswordContainer';

const mapRouteToComponent = (key) => {
  switch (key) {
    case constants.AUTH_ROUTE_LANDING:
      return <LandingContainer />;
    case constants.AUTH_ROUTE_LOGIN:
      return <LoginContainer />;
    case constants.AUTH_ROUTE_ACTIVATE:
      return <ActivationContainer />;
    case constants.AUTH_ROUTE_RESET_PASSWORD:
      return <ResetPasswordContainer />;
    default:
      return <NotFound />;
  }
};
export default mapRouteToComponent;
