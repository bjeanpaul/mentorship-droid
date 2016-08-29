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
    />
    <LoginStatusMessage {...status} />
  </BaseView>
);

Login.propTypes = {
  status: PropTypes.object,
};

export default Login;