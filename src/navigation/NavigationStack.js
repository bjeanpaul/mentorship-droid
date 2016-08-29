import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;
import NotFound from 'src/components/NotFound';
import ROUTES_COMPONENTS from 'src/navigation/routes/actions/components';


const router = key => {
  const Container = ROUTES_COMPONENTS[key] || NotFound;
  return <Container />;
};


const NavigationStack = ({
  navigationState,
}) => (
  <NavigationCardStack
    navigationState={navigationState}
    renderScene={(sceneProps) => router(sceneProps.scene.route.key)}
  />
);


NavigationStack.propTypes = {
  navigationState: PropTypes.any.isRequired,
};


export default NavigationStack;
