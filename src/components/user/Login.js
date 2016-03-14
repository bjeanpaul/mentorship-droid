/* eslint-disable react/jsx-no-bind */

import React, {
  PropTypes,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import ProgressBar from 'ProgressBarAndroid';


const Login = function Login({
  defaultUsername,
  defaultPassword,
  isAuthenticated,
  errorMessage,
  onSubmitPress,
  isLoggingIn,
}) {
  let username = defaultUsername;
  let password = defaultPassword;

  const progressBarPartial = isLoggingIn ? <ProgressBar styleAttr="Horizontal" /> : null;
  const errorMessagePartial = errorMessage ? <Text>{errorMessage}</Text> : null;
  const authPartial = isAuthenticated ? <Text>Youre Logged in!</Text> : null;

  return (
      <View>

        {progressBarPartial}
        {authPartial}

      <TextInput
        placeholder="Username"
        defaultValue={defaultUsername}
        onChangeText={(text) => { username = text; }}
      />

      <TextInput
        placeholder="Password"
        defaultValue={defaultPassword}
        onChangeText={(text) => { password = text; }}
      />

      {errorMessagePartial}

      <TouchableHighlight onPress={() => { onSubmitPress(username, password); }}>
        <View>
          <Text>Log In</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

Login.propTypes = {
  defaultUsername: PropTypes.string,
  defaultPassword: PropTypes.string,
  errorMessage: PropTypes.string,
  onSubmitPress: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool,
};

export default Login;
