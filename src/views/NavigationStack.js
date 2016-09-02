import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;
import NotFound from 'src/components/NotFound';
import ROUTES_COMPONENTS from 'src/routes';


const Router = ({
  sceneProps: { scene: { route: { key, context } } },
}) => {
  const Container = ROUTES_COMPONENTS[key] || NotFound;
  return <Container {...context} />;
};


const NavigationStack = ({
  navigationState,
}) => (
  <NavigationCardStack
    navigationState={navigationState}
    renderScene={sceneProps => <Router sceneProps={sceneProps} />}
  />
);


NavigationStack.propTypes = {
  navigationState: PropTypes.any.isRequired,
};


Router.propTypes = {
  sceneProps: PropTypes.object.isRequired,
};


export default NavigationStack;
