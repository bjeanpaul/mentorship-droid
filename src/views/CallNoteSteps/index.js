import React, { PropTypes } from 'react';

import CallNoteStepsV1 from 'src/views/CallNoteStepsV1';
import CallNoteStepsV2 from 'src/views/CallNoteStepsV2';


export const VERSIONS = {
  1: CallNoteStepsV1,
  2: CallNoteStepsV2,
};


const CallNoteSteps = props => React.createElement(VERSIONS[props.callNote.version], props);


CallNoteSteps.propTypes = {
  callNote: PropTypes.object,
};


export default CallNoteSteps;
