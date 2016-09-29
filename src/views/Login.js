import React, { PropTypes } from 'react';
import { FormView, Text, Header, HeaderIcon } from 'src/components';

import LoginForm from './LoginForm';
import LoginStatusMessage from './LoginStatusMessage';


const Login = ({
  status,
  onBackPress,
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
  </FormView>
);


Login.propTypes = {
  status: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired,
};


export default Login;
