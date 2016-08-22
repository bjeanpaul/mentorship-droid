import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;
import routes from 'src/navigation/onboarding/routes';


const RootNavigation = ({ navigationState }) => (
  <NavigationCardStack
    navigationState={navigationState}
    renderScene={(sceneProps) => routes(sceneProps.scene.route.key)}
  />
);


RootNavigation.propTypes = {
  navigationState: PropTypes.any.isRequired,
};


export default RootNavigation;
