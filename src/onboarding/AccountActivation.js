import { connect } from 'react-redux';

import Login from '../mentor/MentorLogin';
import { login } from '../mentor/MentorActions';


const mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.mentor.isLoading,
    isAuthenticated: state.mentor.isAuthenticated === true,
    defaultUsername: state.mentor.username,
    errorMessage: state.mentor.errorMessage,
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
