import { connect } from 'react-redux';

import PasswordResetContinue from 'src/views/PasswordResetContinue';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(PasswordResetContinue);
