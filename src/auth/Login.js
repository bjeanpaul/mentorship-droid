import { noop } from 'lodash';
import React, { PropTypes } from 'react';

import { BaseView, Toolbar, Text, Link } from 'src/components';

import LoginForm from 'src/auth/LoginForm';
import * as constants from 'src/auth/constants';


const Login = ({ status, ...props }) => (
  <BaseView>
    <Toolbar title="Log in" />
    <LoginForm
      {...props}
      buttonLabel="Log in"
    />

    {/* TODO different colour for error? */}
    <LoginStatusMessage {...status} />

    {/* TODO */}
    <Link onPress={noop}>Forgot your password?</Link>
  </BaseView>
);


const LoginStatusMessage = ({ type }) => {
  switch (type) {
    case constants.AUTH_STATUS_NOT_FOUND:
      return (
        <Text>
          Sorry, we couldn't find an account with that username and password combination.
        </Text>
      );

    default:
      return null;
  }
};


Login.propTypes = {
  status: PropTypes.object,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
};


LoginStatusMessage.propTypes = {
  type: PropTypes.string,
};


export default Login;
