import React, { PropTypes } from 'react';
import { OverlayLoading } from 'src/components';


class Saving extends React.Component {
  constructor(props) {
    super(props);
    this.saved = false;
  }

  // TODO fix Stepper to not need componentDidMount() as a way of dispatching
  // save actions
  componentDidMount() {
    const { callNote } = this.props;

    // workaround for when componentDidMount() is called more than once (e.g.
    // if the component is instantiated multiple times because of
    // NavigationCardStack being set up incorrectly)
    if (!this.saved) {
      this.saved = true;
      this.props.save(callNote);
    }
  }

  render() {
    return <OverlayLoading title="Saving call notes..." />;
  }
}


Saving.propTypes = {
  callNote: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
};


export default Saving;
