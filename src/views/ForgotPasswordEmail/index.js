import React, { PropTypes } from 'react';
import { FormView, Text, Header, HeaderIcon, Button, TextInput } from 'src/components';


class ForgotPasswordEmail extends React.Component {
  static propTypes = {
    onDismissPress: PropTypes.func.isRequired,
    onSendEmailPress: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  setEmail = (email) => this.setState({ email });

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

        <Button
          uid="sendEmail"
          disabled={this.state.email === ''}
          onPress={this.sendEmail}
        >
          Send Email
        </Button>
      </FormView>
    );
  }
}

export default ForgotPasswordEmail;
