import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { resetPassword } from './Actions';
import ResetPassword from './ResetPassword';



const mapDispatchToProps = function mapDispatchToProps(dispatch, { router }) {
  return {
    onSubmitPress: (email) => {

      dispatch(resetPassword({ email }, () => {
        console.log('and were done!')
      }));
    },
  };
};

export default withRouter(connect(
  (state) => state.auth.resetPassword,
  mapDispatchToProps
)(ResetPassword));
