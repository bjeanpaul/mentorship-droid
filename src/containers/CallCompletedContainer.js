import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CallCompleted from 'src/views/CallCompleted';
import { openCreateCallNote } from 'src/actions/callNote';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = (dispatch, { callId }) => bindActionCreators({
  onDismissPress: dismissScreen,
  onAddCallNotesPress: () => openCreateCallNote({ callId }),
}, dispatch);


export default connect(null, mapDispatchToProps)(CallCompleted);
