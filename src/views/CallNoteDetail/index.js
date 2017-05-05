import CallNoteV1Detail from './CallNoteV1Detail';
import React, { PropTypes } from 'react';

const CallNoteDetail = ({
  onBackPress,
  callNote,
  call,
  activity,
}) => (
<CallNoteV1Detail
  onBackPress={onBackPress}
  callNote={callNote}
  activity={activity}
/>);

CallNoteDetail.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  callNote: PropTypes.object,
  call: PropTypes.object,
  activity: PropTypes.object,
};

export default CallNoteDetail;
