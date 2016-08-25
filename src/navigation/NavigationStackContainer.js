import { connect } from 'react-redux';
import NavigationStack from './NavigationStack';

import router from './router';

export default connect(
  state => ({
    router,
    navigationState: state.navigation,
  })
)(NavigationStack);
