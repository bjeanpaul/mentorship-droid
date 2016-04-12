/* eslint-disable react/jsx-no-bind */

import React, {
  Component,
  PropTypes,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import ProgressBar from 'ProgressBarAndroid';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isLoading,
      isAuthenticated,
      errorMessage,
      onSubmitPress,
    } = this.props;


    return (
        <View>

          {progressBarPartial}
          {authPartial}

          <TextInput
            placeholder="Username"
            defaultValue={this.state.username}
            onChangeText={(username) => { this.setState({ username }); }}
          />

          <TextInput
            placeholder="Password"
            defaultValue={this.state.password}
            onChangeText={(password) => { this.setState({ password }); }}
          />

          {errorMessagePartial}

          <TouchableHighlight
            onPress={() => {
              onSubmitPress(this.state.username, this.state.password);
            }}
          >
            <View>
              <Text>Log In</Text>
            </View>
          </TouchableHighlight>
      </View>
    );
  }
};

Profile.propTypes = {
  isLoading: PropTypes.string,
  errorMessage: PropTypes.string,
  onSubmitPress: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};

export default Profile;
