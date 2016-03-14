import { connect } from 'react-redux';

import Login from '../user/Login';

import { login } from '../../actions/user';

const mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    defaultUsername: state.user.username,
    defaultPassword: state.user.password,
    errorMessage: state.auth.errorMessage,
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
