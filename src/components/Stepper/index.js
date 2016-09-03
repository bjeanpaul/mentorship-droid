import React, { PropTypes } from 'react';
import { ProgressBar, BaseView } from 'src/components';
import { NavigationExperimental } from 'react-native';
const { CardStack: NavigationCardStack } = NavigationExperimental;


const Step = ({
  children,
}) => (
  <BaseView>
    {children}
  </BaseView>
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
        completed={ (navigationState.index + 1) * 1.0 / React.Children.count(children) * 1.0 }
      />
    );
  }

  return (
    <BaseView>
      {progressBar}
      <NavigationCardStack
        navigationState={navigationState}
        renderScene={() => children[navigationState.index]}
      />
    </BaseView>
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
