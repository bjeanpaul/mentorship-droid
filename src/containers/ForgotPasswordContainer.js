import { connect } from 'react-redux';

import ForgotPassword from 'src/views/ForgotPassword';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(ForgotPassword);
