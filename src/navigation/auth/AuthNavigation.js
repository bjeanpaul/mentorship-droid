import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { NavigationExperimental } from 'react-native';
const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

import * as constants from './constants';
import LandingContainer from 'src/onboarding/LandingContainer';
import LoginContainer from 'src/auth/LoginContainer';
import ActivationContainer from 'src/auth/ActivationContainer';
import ResetPassword from 'src/auth/ResetPasswordContainer';


const mapRouteToComponent = (key) => {
  switch (key) {
    case constants.ROUTE_AUTH_LANDING:
      return <LandingContainer />;
    case constants.ROUTE_AUTH_LOGIN:
      return <LoginContainer />;
    case constants.ROUTE_AUTH_ACTIVATE:
      return <ActivationContainer />;
    case constants.ROUTE_AUTH_RESET_PASSWORD:
      return <ResetPassword />;
    default:
      return <View><Text>Route Not Found</Text></View>;
  }
};

const RootNavigation = ({
  navigationState,
}) => (
  <NavigationCardStack
    navigationState={navigationState}
    renderScene={(sceneProps) => mapRouteToComponent(sceneProps.scene.route.key)}
  />
);
RootNavigation.propTypes = {
  navigationState: PropTypes.any.isRequired,
};
export default RootNavigation;
