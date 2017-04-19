import { isUndefined, filter, noop, orderBy } from 'lodash';
import { connect } from 'react-redux';
import CallNoteList from 'src/views/CallNoteList';
import { getCallsWithCallNotes } from 'src/store/helpers';
import { dismissScreen } from 'src/actions/navigation';
import { chooseCallNote } from 'src/actions/callNotes';


// TODO handle call notes without activities once we have designs for this
export const mapStateToProps = (state, { activityId }) => {
  let callsAndCallNotes = getCallsWithCallNotes(state);

  if (!isUndefined(activityId)) {
    callsAndCallNotes = filter(callsAndCallNotes, { call: { callActivity: activityId } });
  }
  return { callsAndCallNotes };
};


export const mapDispatchToProps = {
  onViewPress: chooseCallNote,
  onAddPress: noop,
  onDismissPress: dismissScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(CallNoteList);
