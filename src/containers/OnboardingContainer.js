import { connect } from 'react-redux';
import Onboarding from 'src/views/Onboarding';
import * as actions from 'src/actions/onboarding';


export default connect(
  (state) => state.onboarding,
  {
    onChangeText: actions.updateProfile,
  }
)(Onboarding);
