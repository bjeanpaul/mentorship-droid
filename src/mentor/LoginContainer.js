import { connect } from 'react-redux';

import { login } from './Actions';
import Login from './Login';

const mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.mentor.login.isLoading,
    errorMessage: state.mentor.login.errorMessage,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmitPress: (username, password, context) => {
      dispatch(login(username, password, () => {
        context.router.push('/hello');
      }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
