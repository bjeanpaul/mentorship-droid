import React, { PropTypes } from 'react';
import { FormView, Text, Header, HeaderIcon, Link } from 'src/components';

import LoginForm from './LoginForm';
import LoginStatusMessage from './LoginStatusMessage';

const Login = ({
  status,
  onBackPress,
  onForgotPasswordPress,
  ...props,
}) => (
  <FormView>
    <Header>
      <Text style={Text.types.title}>Log in</Text>

      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backDark}
        onPress={onBackPress}
      />
    </Header>

    <LoginForm
      {...props}
      status={status}
      buttonLabel="LOG IN"
    />

    <LoginStatusMessage {...status} />
    <Link
      uid="forgotPassword"
      onPress={onForgotPasswordPress}
      style={{ paddingTop: 20 }}
    >
      Forgot Your Password?
    </Link>
  </FormView>
);


Login.propTypes = {
  status: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onForgotPasswordPress: PropTypes.func.isRequired,
};


export default Login;
