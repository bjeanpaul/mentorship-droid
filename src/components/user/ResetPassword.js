/* eslint-disable react/jsx-no-bind */

import React, {
  Component,
  PropTypes,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import { connect } from 'react-redux';

import { callAPI } from '../../services/api';


// TODO: Really don't appreciate writing validation stuff; let's find a library
// to abstract that out.
class ResetPassword extends Component {

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

    callAPI('/mentor/reset-password/', this.props.authorizationToken, {
      method: 'POST',
      body: JSON.stringify({
        password: this.state.newPassword,
      }),
    })
    .then(data => {
      console.log('success', data);
    }).catch((error) => {
      console.log(error);
    });
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
    const isLoadingPartial = this.state.isLoading ? <Text>Loading</Text> : null;
    return (
      <View>
        {isLoadingPartial}
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

      <Text>{ this.state.errors.network }</Text>

      <Text>{ this.state.errors.newPasswordRepeat }</Text>

        <TouchableHighlight onPress={this.onSubmitPress}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

ResetPassword.propTypes = {
  authToken: PropTypes.string.isRequired,
  onResetPassword: PropTypes.func.isRequired,
};


const mapStateToProps = function mapStateToProps(state) {
  return {
    authToken: state.user.auth.authToken,
  };
};

ResetPassword = connect(
  mapStateToProps,
  {}
)(ResetPassword);


export default ResetPassword;
