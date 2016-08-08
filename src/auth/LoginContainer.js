import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { login } from './actions';
import Login from './Login';

const mapDispatchToProps = function mapDispatchToProps(dispatch, { router }) {
  return {
    handleLoginPress: (email, password) => {
      dispatch(login(email, password, () => {
        router.push('/hello');
      }));
    },
  };
};

export default withRouter(connect(
  (state) => state.auth,
  mapDispatchToProps
)(Login));
