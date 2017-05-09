import React, { Component, PropTypes } from 'react';
import { ControlledStepper } from 'src/components';
import routes from './routes';
import * as NavigationPropTypes from 'NavigationPropTypes';


class CallNoteStepsV2 extends Component {
  constructor(...args) {
    super(...args);
    this.getRoute = this.getRoute.bind(this);
  }

  getRoute(key) {
    const Step = routes[key];

    return (
      <Step
        callNote={this.props.callNote}
        onChange={this.props.onChange}
        onBackPress={this.props.onBackPress}
        onNextPress={this.props.onNextPress}
        onDonePress={this.props.onDonePress}
      />
    );
  }

  render() {
    return (
      <ControlledStepper
        navigationState={this.props.navigationState}
        routes={this.getRoute}
      />
    );
  }
}


CallNoteStepsV2.propTypes = {
  navigationState: NavigationPropTypes.navigationState.isRequired,
  callNote: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
  onDonePress: PropTypes.func.isRequired,
};


export default CallNoteStepsV2;
