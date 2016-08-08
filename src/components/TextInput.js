import React, { Component } from 'react';

import {
  View,
  TextInput as RNTextInput,
} from 'react-native';

import globalStyles from '../StyleSheet';


// TODO: Not a pure function because we want to add
// some material design animations.
class TextInput extends Component {
  render() {
    return (
      <View style={{
        borderColor: '#dfe5e6',
        borderBottomWidth: 1,
        marginBottom: 24,
      }}
      >
        <RNTextInput
          {...this.props}
          style={[globalStyles.textInput, this.props.style]}
          underlineColorAndroid="transparent"
          placeholderTextColor="#c0cbcc"
        />
      </View>
    );
  }
}

export default TextInput;
