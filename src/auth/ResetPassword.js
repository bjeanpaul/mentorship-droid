import React, { PropTypes } from 'react';
import { View } from 'react-native';

import {
  BaseView,
  Toolbar,
  TextInput,
  Text,
  Button,
} from 'src/components';

class ResetPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <BaseView>
        <Toolbar title="Send password reset" />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          label="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />

        <Button
          label="Reset Password"
          handlePress={() => this.props.handleResetPressed(this.state.email)}
        />
        <Text>{this.props.errorMessage}</Text>

      </BaseView>
    );
  }

}
ResetPassword.propTypes = {
  handleResetPressed: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isDone: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default ResetPassword;
