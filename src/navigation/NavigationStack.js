import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;


const NavigationStack = ({
  navigationState,
  router,
}) => (
  <NavigationCardStack
    navigationState={navigationState}
    renderScene={(sceneProps) => router(sceneProps.scene.route.key)}
  />
);

NavigationStack.propTypes = {
  navigationState: PropTypes.any.isRequired,
  router: PropTypes.func.isRequired,
};

export default NavigationStack;
