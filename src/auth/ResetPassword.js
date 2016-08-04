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
  }

  render() {
    return (
      <View>
        <Header title="Reset Password" />
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />

        <Button
          onPress={() => { this.props.handleResetPressed(this.state.email); }}
          label="Reset Password"
        />
        <Text>{this.props.errorMessage}</Text>

      </View>
    );
  }

}
ResetPassword.propTypes = {
  handleResetPressed: PropTypes.func.isRequired,
  handleNextPressed: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isDone: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default ResetPassword;
