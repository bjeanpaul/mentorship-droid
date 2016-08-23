import { connect } from 'react-redux';
import NavigationStack from 'src/navigation/NavigationStack';

import routeToComponent from './routes';

export default connect(
  state => ({
    routeToComponent,
    navigationState: state.navigation.onboarding,
  })
)(NavigationStack);
