/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import {
  Header,
  Text,
  TextInput,
  Button,
} from 'src/components';

class ResetPassword extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: 'peter.pistorius@gmail.com',
    };
    this.handleSubmitPress = this.handleSubmitPress.bind(this);
  }

  handleSubmitPress() {
    this.props.onSubmitPress(this.state.email);
  }

  render() {

    // isLoading and isDone need to do something;

    console.log(this.props.isDone)

    return (
      <View>
        <Header title="Reset Password" />

        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />

        <Button
          onPress={this.handleSubmitPress}
          label="Reset Password"
        />

        <Text>{this.props.errorMessage}</Text>
      </View>
    );
  }

}
ResetPassword.propTypes = {
  onSubmitPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isDone: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default ResetPassword;
