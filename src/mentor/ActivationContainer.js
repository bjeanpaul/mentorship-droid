import { connect } from 'react-redux';

import { login } from './Actions';
import Login from './Login';

const mapStateToProps = function mapStateToProps(state) {
  return {
    headerTitle: 'Activation Account',
    buttonLabel: 'Activate',
    isLoading: state.login.isLoading,
    errorMessage: state.login.errorMessage,
  };
};

// TODO: are we using react-router v3, we can then get the context
// in this view, rather than having to rely on having it in t
const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmitPress: (username, password, context) => {
      dispatch(login(username, password, () => {
        context.router.push('/setup-password');
      }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
