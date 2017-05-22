import React, { PropTypes } from 'react';
import { FormView, Text, Header, HeaderIcon, TextInput, Button } from 'src/components';

class ForgotPasswordReset extends React.Component {
  static propTypes = {
    onBackPress: PropTypes.func.isRequired,
    onLoginPress: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      newPassword: '',
      checkNewPassword: '',
    };
  }

  setToken = (token) => this.setState({ token });

  setNewPassword = (newPassword) => this.setState({ newPassword });

  setCheckNewPassword = (checkNewPassword) => this.setState({ checkNewPassword });

  inputIsValid = () => (
    !((this.state.token !== '') &&
      (this.state.newPassword !== '') &&
      (this.state.newPassword === this.state.checkNewPassword))
  )

  submitPasswordResetData = () => {
    const token = this.state.token.trim();
    const newPassword = this.state.newPassword.trim();
    const checkNewPassword = this.state.checkNewPassword.trim();
    return this.props.onLoginPress({
      token,
      newPassword,
      checkNewPassword,
    });
  }

  render() {
    return (
      <FormView>
        <Header>
          <Text style={Text.types.title}>Reset Password</Text>

          <HeaderIcon
            uid="back"
            type={HeaderIcon.types.backDark}
            onPress={this.props.onBackPress}
          />
        </Header>

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          label="Token"
          value={this.state.token}
          onChangeText={this.setToken}
        />
        <TextInput
          secureTextEntry
          label="New Password"
          value={this.state.newPassword}
          onChangeText={this.setNewPassword}
        />
        <TextInput
          secureTextEntry
          label="New Password Again"
          value={this.state.checkNewPassword}
          onChangeText={this.setCheckNewPassword}
        />

        {/* TODO: <StatusMessage {...status} /> */}

        <Button
          disabled={this.inputIsValid()}
          onPress={this.submitPasswordResetData}
        >
          RESET
        </Button>
      </FormView>
    );
  }
}


export default ForgotPasswordReset;
