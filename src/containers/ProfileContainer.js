import { connect } from 'react-redux';

import { dismissScreen } from 'src/actions/navigation';
import Profile from 'src/views/Profile';


export default connect(state => state.auth, {
  onBackPress: dismissScreen,
})(Profile);
