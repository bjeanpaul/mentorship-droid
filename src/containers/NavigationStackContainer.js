import { connect } from 'react-redux';

import NavigationStack from 'src/views/NavigationStack';
import { getCurrentStack } from 'src/navigationHelpers';


export default connect(
  ({ routes }) => ({ navigationState: getCurrentStack(routes) })
)(NavigationStack);
