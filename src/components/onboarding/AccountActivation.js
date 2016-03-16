import { connect } from 'react-redux';

import Login from '../user/Login';

import { login } from '../../actions/user';

const mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.user.auth.isLoading,
    isAuthenticated: state.user.auth.isAuthenticated,
    defaultUsername: state.user.profile.username,
    defaultPassword: state.user.profile.password,
    errorMessage: state.user.auth.errorMessage,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmitPress: (username, password) => {
      dispatch(login(username, password, ownProps.onAuthenticated));
    },
  };
};

const AccountActivation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default AccountActivation;
