/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react';

import { BaseView, Container, Toolbar, Text, TextInput, Button }
  from 'src/components';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleLoginPress = this.handleLoginPress.bind(this);
  }

  handleLoginPress() {
    this.props.handleLoginPress(
      this.state.username,
      this.state.password,
      this.context
    );
  }

  render() {
    return (
      <BaseView>
        <Toolbar title={this.props.headerTitle} />

        <Container>
          <TextInput
            placeholder="Email"
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </Container>

        <Button
          onPress={this.handleLoginPress}
          label={this.props.buttonLabel}
        />

        <Text>{this.props.errorMessage}</Text>

      </BaseView>
    );
  }
}
Login.defaultProps = {
  headerTitle: 'Log In',
  buttonLabel: 'Log In',
};
Login.propTypes = {
  headerTitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  handleLoginPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Login;
