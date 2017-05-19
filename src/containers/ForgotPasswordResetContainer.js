import { connect } from 'react-redux';

import ForgotPasswordReset from 'src/views/ForgotPasswordReset';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(ForgotPasswordReset);
