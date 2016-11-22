import React, { PropTypes } from 'react';
import { ProgressBar, BaseView, FormView } from 'src/components';
import { StyleSheet, View, NavigationExperimental } from 'react-native';

const {
  Card: NavigationCard,
  Transitioner: NavigationTransitioner,
} = NavigationExperimental;

const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator,
} = NavigationCard;


const styles = StyleSheet.create({
  scenes: {
    flex: 1,
  },
});


const Step = ({
  children,
}) => (
  <BaseView>
    {children}
  </BaseView>
);


const renderScene = (scene, transitionProps, children) => {
  const sceneProps = {
    ...transitionProps,
    scene,
  };

  return (
    <NavigationCard
      {...sceneProps}
      style={NavigationPagerStyleInterpolator.forHorizontal(sceneProps)}
      key={scene.route.key}
      renderScene={cardProps => children[cardProps.scene.index]}
    />
  );
};


const renderScenes = (transitionProps, children) => (
  <View style={styles.scenes}>
    {transitionProps.scenes.map(scene => renderScene(scene, transitionProps, children))}
  </View>
);


const Stepper = ({
  children,
  navigationState,
  hideProgress,
}) => {
  let progressBar;
  if (!hideProgress) {
    progressBar = (
      <ProgressBar
        completed={ (navigationState.index + 1) / React.Children.count(children) }
      />
    );
  }

  return (
    <FormView>
      {progressBar}
      <NavigationTransitioner
        navigationState={navigationState}
        render={props => renderScenes(props, children)}
      />
    </FormView>
  );
};


Stepper.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }),
  hideProgress: PropTypes.bool,
  children: PropTypes.arrayOf(Step).isRequired,
};


Step.propTypes = {
  children: PropTypes.any.isRequired,
};


export {
  Stepper as default,
  Step,
};
