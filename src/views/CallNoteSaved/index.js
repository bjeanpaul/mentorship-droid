import React, { PropTypes } from 'react';
import { OverlayCompleted } from 'src/components';


const CallNoteSaved = ({ onDismissPress }) => (
  <OverlayCompleted title="Call notes saved" onDismissPress={onDismissPress} />
);


CallNoteSaved.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
};


export default CallNoteSaved;
