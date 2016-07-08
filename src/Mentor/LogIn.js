/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import {
  Header,
  Text,
  TextInput,
  Button,
} from 'src/components';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props = props;
    this.context = context;



    this.state = {
      username: 'admin',
      password: '123x',
    };

    this.handleSubmitPress = this.handleSubmitPress.bind(this);
  }

  handleSubmitPress() {
    this.props.onSubmitPress(
      this.state.username,
      this.state.password,
      this.context
    );
  }

  render() {
    return (
      <View>
        <Header title={this.props.headerTitle} />

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

        <Button
          onPress={this.handleSubmitPress}
          label={this.props.buttonLabel}
        />

      <Text>{this.props.errorMessage}</Text>
      </View>
    );
  }

}
Login.contextTypes = {
  router: PropTypes.object.isRequired,
};
Login.propTypes = {
  headerTitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  onSubmitPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Login;
