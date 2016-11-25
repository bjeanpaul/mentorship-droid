import { fromPairs } from 'lodash';
import React, { PropTypes } from 'react';
import { ProgressBar, BaseView, FormView, NavigationStack } from 'src/components';
import { stepKey } from 'src/navigationHelpers';


const Step = ({
  children,
}) => (
  <BaseView>
    {children}
  </BaseView>
);


const getRoutes = children => {
  const routes = React.Children.toArray(children)
    .map((child, i) => [stepKey(i), child]);

  return fromPairs(routes);
};


const Stepper = ({
  children,
  navigationState,
  hideProgress,
}) => {
  const completed = (navigationState.index + 1) / React.Children.count(children);
  const routes = getRoutes(children);

  return (
    <FormView>
      {!hideProgress && <ProgressBar completed={completed} />}
      <NavigationStack
        navigationState={navigationState}
        routes={routes}
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
