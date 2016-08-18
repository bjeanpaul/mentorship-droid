import { connect } from 'react-redux';
import Landing from './Landing';
export default connect(
  null,
  {
    onGetStartedPress: () => console.log(1),
    onLoginPress: () => console.log(2),
  }
)(Landing);
