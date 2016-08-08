import React, { Component } from 'react';

import {
  View,
  TextInput,
} from 'react-native';

import globalStyles from '../StyleSheet';


// TODO: Figure out how to animate the state changes
// TODO: Try and remove the magic numbers.
export default class MultiLineTextInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  render() {
    return (
      <View style={globalStyles.textInputContainer}>
        <TextInput multiline enablesReturnKeyAutomatically
          {...this.props}
          underlineColorAndroid="transparent"
          onChange={(event) => {
            this.setState({
              height: event.nativeEvent.contentSize.height + 8,
            });
          }}
          style={[globalStyles.textInput, { height: Math.max(28, this.state.height) }]}
        />
      </View>
    );
  }

}
