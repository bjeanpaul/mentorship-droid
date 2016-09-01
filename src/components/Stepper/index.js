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
  index = 0,
  navigationState,
  showProgress = true,
}) => {
  let progressBar;
  if (showProgress) {
    progressBar = (
      <ProgressBar
        completed={ index + 1 / React.Children.count(children) }
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
  navigationState: PropTypes.object,
  children: PropTypes.arrayOf(Step).isRequired,
  index: PropTypes.number,
  showProgress: PropTypes.bool,
};


Step.propTypes = {
  children: PropTypes.any.isRequired,
};


export {
  Stepper as default,
  Step,
};
