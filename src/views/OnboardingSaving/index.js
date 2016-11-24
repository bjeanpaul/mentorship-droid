import React, { PropTypes } from 'react';
import { OverlayLoading } from 'src/components';


class Saving extends React.Component {
  // TODO: Stepper should dispatch an action when it's on the last view
  componentDidMount() {
    const {
      id,
      profile,
    } = this.props;

    this.props.save({
      id,
      profile,
    });
  }

  render() {
    return <OverlayLoading title="Saving profile..." />;
  }
}


Saving.propTypes = {
  profile: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
};


export default Saving;