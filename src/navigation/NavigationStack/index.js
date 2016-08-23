import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;

const NavigationStack = ({
  navigationState,
  routeToComponent,
}) => (
  <NavigationCardStack
    navigationState={navigationState}
    renderScene={(sceneProps) => routeToComponent(sceneProps.scene.route.key)}
  />
);

NavigationStack.propTypes = {
  routeToComponent: PropTypes.func.isRequired,
  navigationState: PropTypes.any.isRequired,
};

export default NavigationStack;
