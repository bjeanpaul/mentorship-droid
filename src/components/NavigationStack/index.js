import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';

import { NotFound } from 'src/components';

const { CardStack: NavigationCardStack } = NavigationExperimental;


const Router = ({
  routes,
  sceneProps: { scene: { route: { key, context } } },
}) => {
  const Component = routes[key] || NotFound;
  return <Component {...context} />;
};


const NavigationStack = ({
  routes,
  navigationState,
}) => (
  <NavigationCardStack
    navigationState={navigationState}
    renderScene={sceneProps => <Router routes={routes} sceneProps={sceneProps} />}
  />
);


NavigationStack.propTypes = {
  routes: PropTypes.object.isRequired,
  navigationState: PropTypes.any.isRequired,
};


Router.propTypes = {
  routes: PropTypes.object.isRequired,
  sceneProps: PropTypes.object.isRequired,
};


export default NavigationStack;
