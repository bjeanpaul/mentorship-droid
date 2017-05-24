import React, { PropTypes } from 'react';
import {
  FormView,
  Text,
  Header,
  HeaderIcon,
  Button,
  TextInput,
} from 'src/components';

import {
  FORGOT_PASSWORD_EMAIL_STATUS_BUSY,
  FORGOT_PASSWORD_EMAIL_STATUS_BAD_ADDRESS,
} from 'src/constants/forgotPassword';

class ForgotPasswordEmail extends React.Component {
  static propTypes = {
    onDismissPress: PropTypes.func.isRequired,
    onSendEmailPress: PropTypes.func.isRequired,
    status: PropTypes.object,

  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  setEmail = (email) => this.setState({ email });

  getButtonText = () => (
    this.isBusy() ? 'Sending Email' : 'Send Email'
  );

  disableButton = () => (
    this.state.email === ''
    || this.isBusy()
  );

  isBusy = () => (
    this.props.status.type === FORGOT_PASSWORD_EMAIL_STATUS_BUSY
  );

  sendEmail = () => {
    return this.props.onSendEmailPress({
      email: this.state.email.trim(),
    });
  }

  render() {
    return (
      <FormView>
        <Header>
          <Text style={ Text.types.title }>Send Password Reminder</Text>

          <HeaderIcon
            uid="dismiss"
            type={HeaderIcon.types.backDark}
            onPress={this.props.onDismissPress}
          />
        </Header>

        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={this.setEmail}
        />
        {
          this.props.status.type === FORGOT_PASSWORD_EMAIL_STATUS_BAD_ADDRESS &&
          <Text style={Text.types.textInputErrorMessage}>
            Not a valid email address
          </Text>
        }

        <Button
          uid="sendEmail"
          disabled={this.disableButton()}
          onPress={this.sendEmail}
        >
          {this.getButtonText()}
        </Button>
      </FormView>
    );
  }
}

export default ForgotPasswordEmail;
