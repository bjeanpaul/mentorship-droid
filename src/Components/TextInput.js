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
          placeholder="text"
          placeholderTextColor="#c0cbcc"
        />
      </View>
    );
  }
}
