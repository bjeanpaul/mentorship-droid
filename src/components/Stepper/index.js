import React, { PropTypes } from 'react';
import { ProgressBar, BaseView } from 'src/components';


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
  showProgress = true,
}) => {
  let progressBar;
  if (showProgress) {
    progressBar = (
      <ProgressBar
        completed={ index + 1 / React.Children.count(children) + 1 }
      />
    );
  }
  return (
    <BaseView>
      {progressBar}
      {children[index]}
    </BaseView>
  );
};


Stepper.propTypes = {
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
