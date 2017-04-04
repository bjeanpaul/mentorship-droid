import { connect } from 'react-redux';

import PasswordResetEmailSent from 'src/views/PasswordResetEmailSent';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(PasswordResetEmailSent);
