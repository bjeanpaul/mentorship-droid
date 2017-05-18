import { range, clamp, fromPairs } from 'lodash';
import React, { Component, PropTypes } from 'react';
import BackAndroid from 'BackAndroid';

import { ProgressBar, BaseView, FormView, NavigationStack } from 'src/components';
import { createRoute } from 'src/navigationHelpers';


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

    this.onNextPress = this.onNextPress.bind(this);
    this.onBackPress = this.onBackPress.bind(this);
    this.onNativeBackPress = this.onNativeBackPress.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onNativeBackPress);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onNativeBackPress);
  }

  onNativeBackPress() {
    if (this.state.index > 0) {
      this.onBackPress();
      return true;
    } else {
      return false;
    }
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
