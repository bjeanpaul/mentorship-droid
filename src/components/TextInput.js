import React, { PropTypes } from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';

import Label from './Label';
import { FONT } from 'src/constants/styles';


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
  textInput: {
    fontFamily: FONT.REGULAR,
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
      label = <Label title={this.props.label} style={styles.label} />;
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
