import React, { PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';

import { NotFound } from 'src/components';
import NavigatorContainer from 'src/containers/NavigatorContainer';
import ROUTES_COMPONENTS from 'src/routes';

const { CardStack: NavigationCardStack } = NavigationExperimental;


const Router = ({
  sceneProps: { scene: { route: { key, context } } },
}) => {
  const Container = ROUTES_COMPONENTS[key] || NotFound;

  return (
    <NavigatorContainer hideNav={Container.hideNav}>
      <Container {...context} />
    </NavigatorContainer>
  );
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
