import { connect } from 'react-redux';

import ForgotPasswordEmail from 'src/views/ForgotPasswordEmail';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(ForgotPasswordEmail);
