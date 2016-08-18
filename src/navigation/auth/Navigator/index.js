import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;

import mapRouteToComponent from './mapRouteToComponent';

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
