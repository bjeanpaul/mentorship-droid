import { connect } from 'react-redux';

import { dismissScreen } from 'src/actions/navigation';
import ProfileSettings from 'src/views/ProfileSettings';


export default connect(state => state.auth, {
  onBackPress: dismissScreen,
})(ProfileSettings);
