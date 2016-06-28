/* eslint-disable react/jsx-no-bind */
import React, {
  PropTypes,
  Component,
} from 'react';

import {
  View,
  TouchableHighlight,
} from 'react-native';

import {
  Heading,
  Text,
  Button,
} from '../Components';

class LogIn extends Component {
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

        <Button>Sign In</Button>
      </View>
    );
  }

  // render() {
  //   const {
  //     isLoading,
  //     isAuthenticated,
  //     errorMessage,
  //     onSubmitPress,
  //   } = this.props;
  //
  //   const progressBarPartial = isLoading ? <ProgressBar styleAttr="Horizontal" /> : null;
  //   const errorMessagePartial = errorMessage ? <Text>{errorMessage}</Text> : null;
  //   const authPartial = isAuthenticated ? <Text>Youre Logged in!</Text> : null;
  //
  //   return (
  //     <View style={Styles.dent}>
  //         <Text style={Styles.heading}>Log In</Text>
  //
  //
  //         <TextInput
  //
  //           placeholder="Email"
  //           defaultValue={this.state.username}
  //           onChangeText={(username) => { this.setState({ username }); }}
  //         />
  //
  //         <TextInput
  //           placeholder="Password"
  //           defaultValue={this.state.password}
  //           onChangeText={(password) => { this.setState({ password }); }}
  //         />
  //
  //         {errorMessagePartial}
  //
  //         <TouchableHighlight
  //           onPress={() => {
  //             onSubmitPress(this.state.username, this.state.password);
  //           }}
  //         >
  //           <Button labelText="Activate Account" />
  //         </TouchableHighlight>
  //
  //         <Text style={[Styles.fontSmall, Styles.textLink]}>Forgot your password?</Text>
  //     </View>
  //   );
  // }
}

LogIn.propTypes = {
  defaultUsername: PropTypes.string,
  defaultPassword: PropTypes.string,
  errorMessage: PropTypes.string,
  onSubmitPress: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};

export default LogIn;
