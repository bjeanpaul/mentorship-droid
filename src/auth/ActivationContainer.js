import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { login } from './actions';
import Login from './Login';

const mapStateToProps = function mapStateToProps(state) {
  return {
    headerTitle: 'Activate Account',
    buttonLabel: 'Activate',
    isLoading: state.auth.isLoading,
    errorMessage: state.auth.errorMessage,
  };
};

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
  mapStateToProps,
  mapDispatchToProps
)(Login));
