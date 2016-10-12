import React, { PropTypes } from 'react';
import { OverlayLoading } from 'src/components';


class Saving extends React.Component {
  // TODO: Stepper should dispatch an action when it's on the last view
  componentDidMount() {
    const { callNote } = this.props;
    this.props.save(callNote);
  }

  render() {
    return <OverlayLoading title="Saving call notes..." />;
  }
}


Saving.propTypes = {
  callNote: PropTypes.any.isRequired,
  callId: PropTypes.any.isRequired,
  save: PropTypes.func.isRequired,
};


export default Saving;
