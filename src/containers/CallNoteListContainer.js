import moment from 'moment';
import { isUndefined, filter, orderBy } from 'lodash';
import { connect } from 'react-redux';
import CallNoteList from 'src/views/CallNoteList';
import { getCallsWithCallNotes } from 'src/store/helpers';
import { dismissScreen } from 'src/actions/navigation';
import { chooseCallNote, openCreateCallNote } from 'src/actions/callNotes';

export const addTimeStampToCallsWithCallNotes = (callsAndCallNotes) => {
  return callsAndCallNotes.map((callAndCallNote) => {
    const time = callAndCallNote.callNote
      ? callAndCallNote.callNote.callStartTime
      : callAndCallNote.call.startTime;
    return {
      time,
      ...callAndCallNote,
    };
  });
};

// TODO handle call notes without activities once we have designs for this
export const mapStateToProps = (state, { activity }) => {
  let callsAndCallNotes = getCallsWithCallNotes(state);

  if (!isUndefined(activity)) {
    callsAndCallNotes = filter(
      callsAndCallNotes,
      { call: { activity } });
  }

  callsAndCallNotes = addTimeStampToCallsWithCallNotes(callsAndCallNotes);

  callsAndCallNotes = orderBy(
    callsAndCallNotes,
    ({ time }) => +moment(time), ['desc']
  );

  return { callsAndCallNotes };
};


export const mapDispatchToProps = {
  onViewPress: chooseCallNote,
  onAddPress: openCreateCallNote,
  onDismissPress: dismissScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(CallNoteList);
