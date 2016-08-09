import React, { PropTypes } from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';

import Text from './Text';
import { font } from 'src/app/styles';


const styles = StyleSheet.create({
  container: {
    borderColor: '#dfe5e6',
    borderBottomWidth: 1,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 27,
  },
  containerSelected: {
    borderColor: '#003035',
  },
  label: {
    textAlign: 'left',
    fontFamily: font.brandonText,
    fontSize: 14,
    color: '#9fb1b3',
  },
  textInput: {
    fontFamily: font.brandonText,
    fontSize: 18,
    color: '#003035',
    padding: 0,
    lineHeight: 28,
    marginBottom: 8,
  },
});

export default class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    let label;
    if (this.props.label) {
      label = <Text style={styles.label}>{this.props.label}</Text>;
    }

    return (
      <View
        style={[
          styles.container,
          this.state.selected && styles.containerSelected,
        ]}
      >
        {label}
        <RNTextInput
          {...this.props}
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholderTextColor="#c0cbcc"
          onFocus={() => this.setState({ selected: true })}
          onBlur={() => this.setState({ selected: false })}
        />
      </View>
    );
  }
}
TextInput.propTypes = {
  label: PropTypes.string,
};
