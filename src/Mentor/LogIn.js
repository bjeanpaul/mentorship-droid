/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { View } from 'react-native';

import {
  Heading,
  TextLink,
  TextInput,
  Button,
} from '../Components';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.defaultUsername,
      password: this.props.defaultPassword,
    };
  }

  render() {
    return (
      <View>
        <Heading>Log In</Heading>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button>Sign In</Button>
        <TextLink>Forgot your password?</TextLink>
      </View>
    );
  }
}

LogIn.propTypes = {
  defaultUsername: React.PropTypes.string,
  defaultPassword: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
  onSubmitPress: React.PropTypes.func.isRequired,
  isAuthenticated: React.PropTypes.bool.isRequired,
  isLoading: React.PropTypes.bool,
};

export default LogIn;
