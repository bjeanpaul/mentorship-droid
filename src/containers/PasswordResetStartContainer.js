import { connect } from 'react-redux';

import PasswordResetStart from 'src/views/PasswordResetStart';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(PasswordResetStart);
