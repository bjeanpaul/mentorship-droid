import { connect } from 'react-redux';

import { login } from './actions';
import Login from './Login';

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLoginPress: (email, password) => {
      dispatch(login(email, password, () => {
        // TODO: Transition to new view.
      }));
    },
  };
};

export default connect(
  (state) => state.auth,
  mapDispatchToProps
)(Login);
