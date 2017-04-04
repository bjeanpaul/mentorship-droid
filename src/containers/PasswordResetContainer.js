import { connect } from 'react-redux';

import PasswordReset from 'src/views/PasswordReset';
import { dismissScreen } from 'src/actions/navigation';


export const mapDispatchToProps = {
  onDismissPress: dismissScreen,
};


export default connect(null, mapDispatchToProps)(PasswordReset);
