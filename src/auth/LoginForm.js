import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'src/components';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.initialUsername,
      password: this.props.initialPassword,
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
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          secureTextEntry
          label="Password"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button
          handlePress={() => this.props.handleLoginPress(
            this.state.username,
            this.state.password
          )}
          label={this.props.buttonLabel}
        />
      </View>
    );
  }
}
LoginForm.propTypes = {
  initialUsername: PropTypes.string,
  initialPassword: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  handleLoginPress: PropTypes.func.isRequired,
};

export default LoginForm;
