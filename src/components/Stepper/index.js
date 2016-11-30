import { range, clamp, fromPairs, debounce } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { ProgressBar, BaseView, FormView, NavigationStack } from 'src/components';
import { createRoute } from 'src/navigationHelpers';


const PAGING_DEBOUNCE = 250;


const debouncePager = fn => debounce(fn, PAGING_DEBOUNCE, {
  leading: true,
  trailing: false,
});


const Step = ({
  children,
}) => (
  <BaseView>
    {children}
  </BaseView>
);


class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.onNextPress = debouncePager(this.onNextPress.bind(this));
    this.onBackPress = debouncePager(this.onBackPress.bind(this));
  }

  onNextPress() {
    this.incrStep(+1);
  }

  onBackPress() {
    this.incrStep(-1);
  }

  getRoutes() {
    const routes = React.Children.toArray(this.props.children)
      .map((child, i) => [i, this.createRoute(child)]);

    return fromPairs(routes);
  }

  getNumSteps() {
    return React.Children.count(this.props.children);
  }

  getNavigationState() {
    return {
      index: this.state.index,
      routes: range(this.getNumSteps()).map(i => createRoute(i)),
    };
  }

  createRoute(el) {
    return React.cloneElement(el, {
      onNextPress: this.onNextPress,
      onBackPress: this.onBackPress,
    });
  }

  incrStep(v) {
    this.setState({
      index: clamp(this.state.index + v, 0, this.getNumSteps() - 1),
    });
  }

  render() {
    const numSteps = React.Children.count(this.props.children);
    const completed = (this.state.index + 1) / numSteps;

    return (
      <FormView>
        {!this.props.hideProgress && <ProgressBar completed={completed} />}
        <NavigationStack
          navigationState={this.getNavigationState()}
          routes={this.getRoutes()}
        />
      </FormView>
    );
  }
}


Stepper.propTypes = {
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
