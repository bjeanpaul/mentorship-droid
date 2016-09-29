import React, { PropTypes } from 'react';
import { FormView, Text, Header, HeaderIcon } from 'src/components';

import LoginForm from './LoginForm';
import LoginStatusMessage from './LoginStatusMessage';


const Activation = ({
  status,
  onBackPress,
  ...props,
}) => (
  <FormView>
    <Header>
      <Text style={Text.types.title}>Activate Account</Text>

      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backDark}
        onPress={onBackPress}
      />
    </Header>

    <LoginForm
      {...props}
      status={status}
      buttonLabel="ACTIVATE"
    />

    <LoginStatusMessage {...status} />
  </FormView>
);


Activation.propTypes = {
  status: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired,
};


export default Activation;
