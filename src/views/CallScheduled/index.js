import React, { PropTypes } from 'react';
import { OverlayCompleted } from 'src/components';


const CallScheduled = ({ onDismissPress }) => (
  <OverlayCompleted title="Call Scheduled" onDismissPress={onDismissPress} />
);


CallScheduled.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
};


export default CallScheduled;
