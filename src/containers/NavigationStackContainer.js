import { connect } from 'react-redux';
import NavigationStack from 'src/views/NavigationStack';


export default connect(
  state => ({
    navigationState: state.navigation,
  })
)(NavigationStack);
