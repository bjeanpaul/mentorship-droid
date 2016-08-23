import { connect } from 'react-redux';
import NavigationStack from './NavigationStack';

import routeToScene from './routes';

export default connect(
  state => ({
    routeToScene,
    navigationState: state.navigation,
  })
)(NavigationStack);
