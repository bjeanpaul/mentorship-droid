import React, {
  Component,
} from 'react';

import {
  View,
  TextInput as RNTextInput,
} from 'react-native';

import { styles } from '../StyleSheet';

export class TextInput extends Component {
  render() {
    return (
      <View style={styles.textInputContainer}>
        <RNTextInput
          {...this.props}
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholderTextColor="#c0cbcc"
        />
      </View>
    );
  }
}

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
