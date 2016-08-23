import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;


const NavigationStack = ({
  navigationState,
  routeToScene,
}) => (
  <NavigationCardStack
    navigationState={navigationState}
    renderScene={(sceneProps) => routeToScene(sceneProps.scene.route.key)}
  />
);

NavigationStack.propTypes = {
  navigationState: PropTypes.any.isRequired,
  routeToScene: PropTypes.func.isRequired,
};

export default NavigationStack;
