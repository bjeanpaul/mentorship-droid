import React, { Component } from 'react';

import {
  View,
  TextInput,
} from 'react-native';


import globalStyles from '../StyleSheet';

// TODO: Not a pure function because we want to add
// some material design animations.
class MyTextInput extends Component {

  render() {
    return (
      <View style={{
        borderColor: '#dfe5e6',
        borderBottomWidth: 1,
        marginBottom: 24,
      }}
      >
        <TextInput
          {...this.props}
          style={[globalStyles.textInput, this.props.style]}
          underlineColorAndroid="transparent"
          placeholderTextColor="#c0cbcc"
        />
      </View>
    );
  }
};

export default MyTextInput;

// TODO: Figure out how to animate the state changes
// TODO: Try and remove the magic numbers.
export class MultiLineTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  render() {
    return (
      <View style={styles.textInputContainer}>
        <RNTextInput multiline enablesReturnKeyAutomatically
          {...this.props}
          underlineColorAndroid="transparent"
          onChange={(event) => {
            this.setState({
              height: event.nativeEvent.contentSize.height + 8,
            });
          }}
          style={[styles.textInput, { height: Math.max(28, this.state.height) }]}
        />
      </View>
    );
  }

}
