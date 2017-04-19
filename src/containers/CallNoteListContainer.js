import moment from 'moment';
import { isUndefined, filter, noop, orderBy } from 'lodash';
import { connect } from 'react-redux';
import CallNoteList from 'src/views/CallNoteList';
import { getCallsWithCallNotes } from 'src/store/helpers';
import { dismissScreen } from 'src/actions/navigation';
import { chooseCallNote } from 'src/actions/callNotes';


// TODO handle call notes without activities once we have designs for this
export const mapStateToProps = (state, { activity }) => {
  let callsAndCallNotes = getCallsWithCallNotes(state);

  if (!isUndefined(activity)) {
    callsAndCallNotes = filter(callsAndCallNotes, { call: { activity: activity } });
  }

  callsAndCallNotes = orderBy(
    callsAndCallNotes,
    ({ callNote: { callStartTime } }) => +moment(callStartTime), ['desc']
  );

  return { callsAndCallNotes };
};


export const mapDispatchToProps = {
  onViewPress: chooseCallNote,
  onAddPress: noop,
  onDismissPress: dismissScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(CallNoteList);
