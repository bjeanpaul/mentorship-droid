import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { resetPassword } from './Actions';
import ResetPassword from './ResetPassword';

const mapDispatchToProps = function mapDispatchToProps(dispatch, { router }) {
  return {
    handleNextPressed: () => {
    },
    handleResetPressed: (email) => {
      dispatch(resetPassword({ email }, () => {
        router.push('done/');
      }));
    },
  };
};

export default withRouter(connect(
  (state) => state.auth.resetPassword,
  mapDispatchToProps
)(ResetPassword));
