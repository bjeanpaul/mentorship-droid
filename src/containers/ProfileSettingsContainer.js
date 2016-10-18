import { connect } from 'react-redux';

import { dismissScreen } from 'src/actions/navigation';
import { logout } from 'src/actions/auth';
import { viewAllCallNotes } from 'src/actions/callNote';
import ProfileSettings from 'src/views/ProfileSettings';


export default connect(state => state.auth, {
  onBackPress: dismissScreen,
  onLogoutPress: logout,
  onCallNotesPress: viewAllCallNotes,
})(ProfileSettings);
