import { connect } from 'react-redux';

import ForgotPasswordEmailSent from 'src/views/ForgotPasswordEmailSent';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(ForgotPasswordEmailSent);
