import { connect } from 'react-redux';
import Landing from './Landing';

// TODO: Import Navigation Actions.
const todo = () => {
  console.log('do me.')
  return {
    type: 'TODO',
  }
};

export default connect(
  null,
  {
    onGetStartedPress: () => todo,
    onLoginPress: () => todo,
  }
)(Landing);
