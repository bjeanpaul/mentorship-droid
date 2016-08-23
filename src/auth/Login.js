import React, { PropTypes } from 'react';
import { BaseView, Toolbar } from 'src/components';

import LoginForm from './LoginForm';
import LoginStatusMessage from './LoginStatusMessage';


const Login = ({
  status,
  ...props,
}) => (
  <BaseView>
    <Toolbar title="Log in" />
    <LoginForm
      {...props}
      buttonLabel="Log in"
      initialUsername="admin@example.org"
      initialPassword="123"
    />

    {/* TODO different colour for error? */}
    <LoginStatusMessage {...status} />
  </BaseView>
);

Login.propTypes = {
  status: PropTypes.object,
};

export default Login;
