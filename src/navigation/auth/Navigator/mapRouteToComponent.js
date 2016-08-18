import React from 'react';
import { View, Text } from 'react-native';
import * as constants from 'src/navigation/auth/constants';

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
      return <View><Text>Route Not Found</Text></View>;
  }
};
export default mapRouteToComponent;
