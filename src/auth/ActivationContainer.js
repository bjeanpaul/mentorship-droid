import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { login } from './actions';
import Activation from './Activation';

const mapDispatchToProps = function mapDispatchToProps(dispatch, { router }) {
  return {
    handleLoginPress: (username, password) => {
      dispatch(login(username, password, () => {
        router.push('/setup-password');
      }));
    },
  };
};

export default withRouter(connect(
  (state) => state.auth,
  mapDispatchToProps
)(Activation));
