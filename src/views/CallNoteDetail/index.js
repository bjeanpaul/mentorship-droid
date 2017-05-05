import CallNoteV1Detail from './CallNoteV1Detail';
import CallNoteV2Detail from './CallNoteV2Detail';
import React, { PropTypes } from 'react';

const CallNoteDetail = ({
  onBackPress,
  callNote,
  call,
  activity,
}) => {
  const version1 = (
    <CallNoteV1Detail
      onBackPress={onBackPress}
      callNote={callNote}
      activity={activity}
    />);
  const version2 = (
    <CallNoteV2Detail
      onBackPress={onBackPress}
      callNote={callNote}
      call={call}
      activity={activity}
    />);

  return (callNote.version && String(callNote.version) === '2') ? version2 : version1;
};

CallNoteDetail.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  callNote: PropTypes.object,
  call: PropTypes.object,
  activity: PropTypes.object,
};

export default CallNoteDetail;
