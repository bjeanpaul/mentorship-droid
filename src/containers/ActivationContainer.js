import { connect } from 'react-redux';

import { login } from 'src/actions/auth';
import { dismissScreen } from 'src/actions/navigation';
import Activation from 'src/views/Activation';


export default connect(state => state.auth, {
  onLoginPress: login,
  onBackPress: dismissScreen,
})(Activation);
