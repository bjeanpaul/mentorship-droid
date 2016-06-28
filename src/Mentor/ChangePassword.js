/* eslint-disable react/jsx-no-bind */

import React, {
  PropTypes,
  Component,
} from 'react';

import {
  TouchableHighlight,
  View,
} from 'react-native';

import {
  Heading,
  Text,
  TextInput,
  Button,
} from '../Components';

import { connect } from 'react-redux';

class ChangePassword extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newPassword: '123',
      newPasswordRepeat: '123',
      isLoading: false,
      errors: {},
    };

    this.validateInput = this.validateInput.bind(this);
    this.onSubmitPress = this.onSubmitPress.bind(this);
  }

  onSubmitPress() {
    this.validateInput();
    if (this.state.errors.length > 0) {
      return;
    }

    // callAPI('/mentor/reset-password/', this.props.authorizationToken, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     password: this.state.newPassword,
    //   }),
    // })
    // .then(data => {
    //   console.log('success', data);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  validateInput() {
    const errors = {};
    const { newPassword, newPasswordRepeat } = this.state;
    if (newPassword.length <= 0) {
      errors.newPassword = 'Passwords can not be blank';
    }
    if (newPassword !== newPasswordRepeat) {
      errors.newPasswordRepeat = 'Passwords do not match.';
    }
    this.setState({ errors });
  }

  render() {
    return (
      <View>
        <Heading>Change password</Heading>

        <TextInput
          placeholder="New password"
          value={this.state.newPassword}
          onChangeText={ (newPassword) => {
            this.setState({ newPassword });
            this.validateInput();
          }}
        />
        <Text>{ this.state.errors.newPassword }</Text>

        <TextInput
          placeholder="Repeat Password"
          value={this.state.newPasswordRepeat}
          onChangeText={ (newPasswordRepeat) => {
            this.setState({ newPasswordRepeat });
            this.validateInput();
          }}
        />

        <Text>{ this.state.errors.newPasswordRepeat }</Text>


        <Button>Change my password</Button>
      </View>
    );
  }
}

ChangePassword.propTypes = {
  authToken: PropTypes.string.isRequired,
  onResetPassword: PropTypes.func.isRequired,
};


const mapStateToProps = function mapStateToProps(state) {
  return {
    authToken: state.mentor.authToken,
  };
};

ChangePassword = connect(
  mapStateToProps,
  {}
)(ChangePassword);


export default ChangePassword;
