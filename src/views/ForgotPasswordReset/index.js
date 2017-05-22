import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';
import {
  FormView,
  Text,
  Header,
  HeaderIcon,
  TextInput,
  Button,
  StatusMessage,
} from 'src/components';

class ForgotPasswordReset extends React.Component {
  static propTypes = {
    onBackPress: PropTypes.func.isRequired,
    onLoginPress: PropTypes.func,
    message: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      newPassword: 'foo',
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

  displayPasswordErrorMessage = () => {
    return (
      this.state.newPassword !== this.state.checkNewPassword
      && this.state.newPassword !== ''
    );
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
        <ScrollView>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          label="Token"
          value={ this.state.token }
          onChangeText={ this.setToken }
        />
        {((this.props.message !== '')
          && <StatusMessage
            message={this.props.message}
            theme={StatusMessage.themes.textInputMessage}
          />
          )
        }
        <TextInput
          secureTextEntry
          label="New Password"
          value={ this.state.newPassword }
          onChangeText={ this.setNewPassword }
        />
        <TextInput
          secureTextEntry
          label="New Password Again"
          value={ this.state.checkNewPassword }
          onChangeText={ this.setCheckNewPassword }
        />
        {this.displayPasswordErrorMessage() &&
          <StatusMessage
            message={'Passwords don\'t match'}
            theme={StatusMessage.themes.textInputMessage}
          />
        }

        <Button
          disabled={ this.inputIsValid() }
          onPress={ this.submitPasswordResetData }
        >
          RESET
        </Button>
      </ScrollView>
      </FormView>
    );
  }
}


export default ForgotPasswordReset;
