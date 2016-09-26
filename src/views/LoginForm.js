import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'src/components';

import * as constants from 'src/constants/auth';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.initialUsername,
      password: props.initialPassword,
    };
  }

  render() {
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          label="Email"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          secureTextEntry
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <Button
          disabled={this.props.status.type === constants.AUTH_STATUS_BUSY}
          onPress={() => this.props.onLoginPress(
            this.state.username,
            this.state.password
          )}
        >
          {this.props.buttonLabel}
        </Button>
      </View>
    );
  }
}

LoginForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onLoginPress: PropTypes.func.isRequired,
  initialUsername: PropTypes.string,
  initialPassword: PropTypes.string,
  status: PropTypes.object,
};

export default LoginForm;
