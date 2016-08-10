import { connect } from 'react-redux';

import { login } from './actions';
import Activation from './Activation';

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLoginPress: (username, password) => {
      dispatch(login(username, password, () => {
        // TODO: Transition to new view.
      }));
    },
  };
};

export default connect(
  (state) => state.auth,
  mapDispatchToProps
)(Activation);
