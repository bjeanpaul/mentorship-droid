import { connect } from 'react-redux';

import Navigator from './Navigator';

export default connect(
  state => ({
    navigationState: state.navigation.onboarding,
  })
)(Navigator);
