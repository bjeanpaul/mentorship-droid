import React, { PropTypes } from 'react';
import { FormView, Text, Header, HeaderIcon, Button, TextInput } from 'src/components';


class ForgotPasswordEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <FormView>
        <Header>
          <Text style={Text.types.title}>Send Password Reminder</Text>

          <HeaderIcon
            uid="dismiss"
            type={HeaderIcon.types.backDark}
            onPress={this.props.onDismissPress}
          />
        </Header>

        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <Button
          uid="sendEmail"
          disabled={this.state.email === '' }
          onPress={() => this.props.onSendEmailPress(
            this.state.email
          )}
        >
          Send Email
        </Button>
      </FormView>
    );
  }
}

ForgotPasswordEmail.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
  onSendEmailPress: PropTypes.func.isRequired,
};


export default ForgotPasswordEmail;
