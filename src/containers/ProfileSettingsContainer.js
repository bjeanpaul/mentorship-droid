import { connect } from 'react-redux';

import { dismissScreen } from 'src/actions/navigation';
import { logout } from 'src/actions/auth';
import ProfileSettings from 'src/views/ProfileSettings';


export default connect(state => state.auth, {
  onBackPress: dismissScreen,
  onLogoutPress: logout,
})(ProfileSettings);
