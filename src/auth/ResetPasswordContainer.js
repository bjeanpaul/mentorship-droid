import { connect } from 'react-redux';

import { resetPassword } from './actions';
import ResetPassword from './ResetPassword';

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleNextPressed: () => {
    },
    handleResetPressed: (email) => {
      dispatch(resetPassword({ email }, () => {
        // TODO: Transition to new view.
      }));
    },
  };
};

export default connect(
  (state) => state.auth,
  mapDispatchToProps
)(ResetPassword);
