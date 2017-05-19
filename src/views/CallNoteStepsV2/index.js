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
    const Step = this.props.routes[key];

    return (
      <Step
        activity={this.props.activity}
        callNote={this.props.callNote}
        metadata={this.props.metadata}
        onChange={this.props.onChange}
        onBackPress={this.props.onBackPress}
        onNextPress={this.props.onNextPress}
        onDonePress={this.props.onDonePress}
        onActivityChangeSelect={this.props.onActivityChangeSelect}
      />
    );
  }

  render() {
    return (
      <ControlledStepper
        navigationState={this.props.steps}
        routes={this.getRoute}
      />
    );
  }
}


CallNoteStepsV2.propTypes = {
  routes: PropTypes.object,
  steps: NavigationPropTypes.navigationState.isRequired,
  activity: PropTypes.any,
  callNote: PropTypes.object.isRequired,
  metadata: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
  onDonePress: PropTypes.func.isRequired,
  onActivityChangeSelect: PropTypes.func.isRequired,
};


CallNoteStepsV2.defaultProps = {
  routes,
};


export default CallNoteStepsV2;
