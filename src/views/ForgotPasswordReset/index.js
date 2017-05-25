import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';
import {
  FormView,
  Text,
  Header,
  HeaderIcon,
  TextInput,
  Button,
} from 'src/components';

import {
  FORGOT_PASSWORD_RESET_STATUS_BUSY,
  FORGOT_PASSWORD_RESET_STATUS_BAD_TOKEN,
} from 'src/constants/forgotPassword';

class ForgotPasswordReset extends React.Component {
  static propTypes = {
    onBackPress: PropTypes.func.isRequired,
    onResetPress: PropTypes.func,
    status: PropTypes.object,
    initialNewPassword: PropTypes.string,
    initialCheckNewPassword: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      newPassword: this.props.initialNewPassword || '',
      checkNewPassword: this.props.initialCheckNewPassword || '',
    };
  }

  setToken = (token) => this.setState({ token });

  setNewPassword = (newPassword) => this.setState({ newPassword });

  setCheckNewPassword = (checkNewPassword) => this.setState({ checkNewPassword });

  getButtonText = () => (
    (this.props.status.type === FORGOT_PASSWORD_RESET_STATUS_BUSY) ? 'RESETTING' : 'RESET'
  )

  inputIsValid = () => {
    const result = ((this.state.token !== '') &&
     (this.state.newPassword !== '') &&
     (this.state.newPassword === this.state.checkNewPassword));
    return result;
  }

  canPressButton = () => (
    this.inputIsValid() &&
    this.props.status.type !== FORGOT_PASSWORD_RESET_STATUS_BUSY
  )

  submitPasswordResetData = () => {
    const token = this.state.token.trim();
    const newPassword = this.state.newPassword.trim();
    const checkNewPassword = this.state.checkNewPassword.trim();
    return this.props.onResetPress({
      token,
      newPassword,
      checkNewPassword,
    });
  }

  displayPasswordErrorMessage = () => {
    if (this.state.newPassword === '' || this.state.checkNewPassword === '') {
      return false;
    } else if (this.state.newPassword === this.state.checkNewPassword) {
      return false;
    } else { return true; }
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
          value={this.state.token}
          onChangeText={this.setToken}
        />
        {
          this.props.status.type === FORGOT_PASSWORD_RESET_STATUS_BAD_TOKEN &&
          <Text style={Text.types.textInputErrorMessage}>
            Reset code is incorrect, please check your email
          </Text>
        }
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
        {this.displayPasswordErrorMessage() &&
          <Text style={Text.types.textInputErrorMessage}>
            {'Passwords don\'t match'}
          </Text>
        }

        <Button
          uid={'submit'}
          disabled={!this.canPressButton()}
          onPress={this.submitPasswordResetData}
        >
          {this.getButtonText()}
        </Button>
      </ScrollView>
      </FormView>
    );
  }
}


export default ForgotPasswordReset;
