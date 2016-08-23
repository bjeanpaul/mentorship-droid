import { noop } from 'lodash';
import React, { PropTypes } from 'react';
import { BaseView, Toolbar, Link } from 'src/components';

import LoginForm from './LoginForm';
import LoginStatusMessage from './LoginStatusMessage';


const Activation = ({
  status,
  ...props,
}) => (
  <BaseView>
    <Toolbar title="Activate Account" />
    <LoginForm
      {...props}
      buttonLabel="Activate"
      initialUsername="admin@example.org"
      initialPassword="123"
    />

    {/* TODO different colour for error? */}
    <LoginStatusMessage {...status} />

    {/* TODO */}
    <Link onPress={noop}>Forgot your password?</Link>
  </BaseView>
);

Activation.propTypes = {
  status: PropTypes.object,
};

export default Activation;
