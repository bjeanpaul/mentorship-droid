import React, { PropTypes } from 'react';
import { BaseView, Text, Header, HeaderIcon } from 'src/components';

import LoginForm from './LoginForm';
import LoginStatusMessage from './LoginStatusMessage';


const Activation = ({
  status,
  onBackPress,
  ...props,
}) => (
  <BaseView>
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
  </BaseView>
);


Activation.propTypes = {
  status: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired,
};


export default Activation;
