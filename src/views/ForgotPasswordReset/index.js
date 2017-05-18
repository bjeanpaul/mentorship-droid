import React, { PropTypes } from 'react';
import { FormView, Text, Header, HeaderIcon, TextInput, Button } from 'src/components';

class ForgotPasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      newPassword: '',
      checkNewPassword: '',
    };
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
          onChangeText={token => this.setState({ token })}
        />
        <TextInput
          secureTextEntry
          label="New Password"
          value={this.state.newPassword}
          onChangeText={newPassword => this.setState({ newPassword })}
        />
        <TextInput
          secureTextEntry
          label="New Password Again"
          value={this.state.checkNewPassword}
          onChangeText={checkNewPassword => this.setState({ checkNewPassword })}
        />

        {/* TODO: <StatusMessage {...status} /> */}

        <Button
          disabled={!((this.state.newPassword !== '') &&
                     (this.state.newPassword === this.state.checkNewPassword))}
          onPress={() => this.props.onLogInPress({
            token: this.state.token,
            newPassword: this.state.newPassword,
            checkNewPassword: this.state.checkNewPassword,
          })}
        >
          LOG IN
        </Button>
      </FormView>
    );
  }
}

ForgotPasswordReset.PropTypes = {
  onBackPress: PropTypes.func.isRequired,
};


export default ForgotPasswordReset;
