import { connect } from 'react-redux';

import PasswordResetEmail from 'src/views/PasswordResetEmail';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(PasswordResetEmail);
