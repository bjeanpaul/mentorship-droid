import { connect } from 'react-redux';
import Onboarding from 'src/views/Onboarding';


export default connect(state => ({
  navigationState: state.onboarding.navigation,
}))(Onboarding);
