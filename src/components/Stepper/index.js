import React, { PropTypes } from 'react';
import { ProgressBar, BaseView, FormView } from 'src/components';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;


const Step = ({
  children,
}) => (
  <BaseView>
    {children}
  </BaseView>
);


const renderScene = children => ({ scene: { index } }) => (children[index])


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
      <NavigationCardStack
        navigationState={navigationState}
        renderScene={renderScene={renderScene(children)}}
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
