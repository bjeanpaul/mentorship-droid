import React, { Component, PropTypes } from 'react';
import BackAndroid from 'BackAndroid';

import { ProgressBar, FormView, NavigationStack } from 'src/components';
import * as NavigationPropTypes from 'NavigationPropTypes';


class ControlledStepper extends Component {
  constructor(...args) {
    super(...args);
    this.state = { index: 0 };
    this.onHardwareBackPress = this.onHardwareBackPress.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onHardwareBackPress);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onHardwareBackPress);
  }

  onHardwareBackPress() {
    if (this.props.onHardwareBackPress) this.props.onHardwareBackPress();
  }

  render() {
    const { navigationState } = this.props;
    const completed = (navigationState.index + 1) / navigationState.routes.length;

    return (
      <FormView>
        <ProgressBar completed={completed} />
        <NavigationStack
          navigationState={this.props.navigationState}
          routes={this.props.routes}
        />
      </FormView>
    );
  }
}


ControlledStepper.propTypes = {
  routes: PropTypes.object.isRequired,
  navigationState: NavigationPropTypes.navigationState.isRequired,
  onHardwareBackPress: PropTypes.func,
};


ControlledStepper.defaultProps = {
};


export default ControlledStepper;
