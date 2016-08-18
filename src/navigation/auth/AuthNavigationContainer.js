import { connect } from 'react-redux';

import AuthNavigation from './AuthNavigation';

export default connect(
  state => ({
    navigationState: state.navigation.auth,
  })
)(AuthNavigation);
