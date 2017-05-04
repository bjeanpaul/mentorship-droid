import moment from 'moment';
import { isUndefined, filter, orderBy } from 'lodash';
import { connect } from 'react-redux';
import CallNoteList from 'src/views/CallNoteList';
import { getCallsWithCallNotes } from 'src/store/helpers';
import { dismissScreen } from 'src/actions/navigation';
import { chooseCallNote, openRetroactivelyCreateCallNote } from 'src/actions/callNotes';

// TODO handle call notes without activities once we have designs for this
export const mapStateToProps = (state, { activity, notDismissable }) => {
  let callsAndCallNotes = getCallsWithCallNotes(state);

  if (!isUndefined(activity)) {
    callsAndCallNotes = filter(
      callsAndCallNotes,
      { call: { activity } });
  }

  callsAndCallNotes = orderBy(
    callsAndCallNotes,
    ({ call: { startTime } }) => +moment(startTime), ['desc']
  );

  return {
    callsAndCallNotes,
    notDismissable,
  };
};


export const mapDispatchToProps = {
  onViewPress: chooseCallNote,
  onAddPress: openRetroactivelyCreateCallNote,
  onDismissPress: dismissScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(CallNoteList);
