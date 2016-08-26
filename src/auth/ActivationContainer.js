import { connect } from 'react-redux';

import { login } from './actions';
import Activation from './Activation';


export default connect(
  (state) => state.auth,
  {
    onLoginPress: login,
  }
)(Activation);
