/* eslint-disable react/jsx-no-bind */
import React, {
  PropTypes,
  Component,
} from 'react';

import {
  View,
} from 'react-native';

import {
  Heading,
  TextInput,
  Button,
} from '../Components';


class ForgotPassword extends Component {
  render() {
    return (
      <View>
        <Heading>Send password reminder</Heading>
        <TextInput placeholder="Email" />
        <Button>Reset my password</Button>
      </View>
    );
  }
}
export default ForgotPassword;
