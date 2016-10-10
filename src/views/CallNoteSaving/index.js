import React, { PropTypes } from 'react';
import { OverlayLoading } from 'src/components';


class Saving extends React.Component {
  // TODO: Stepper should dispatch an action when it's on the last view
  componentDidMount() {
    const {
      callId,
      callNote,
    } = this.props;

    this.props.save({
      callId,
      callNote,
    });
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
