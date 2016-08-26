import { connect } from 'react-redux';
import NavigationStack from './NavigationStack';


export default connect(
  state => ({
    navigationState: state.navigation,
  })
)(NavigationStack);
