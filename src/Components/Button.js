import React, {
  Component,
  PropTypes,
} from 'react';

import {
  TouchableNativeFeedback,
  View,
  StyleSheet,
} from 'react-native';

import Text from 'Text';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 24,
    marginRight: 24,
  },
  buttonText: {
    fontFamily: 'Brandon Text',
    fontSize: 13,
    fontWeight: '600',
    margin: 16,
  },
});

export default class Button extends Component {

  constructor(props) {
    super(props);
    this.label = props.label || '';
    this.color = props.color || '#f77040';
    this.onPress = props.onPress;
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {

    let button = (
      <View style={[styles.button, this.props.style, { borderColor: this.color }]}>
        <Text style={[styles.buttonText, { color: this.color }]}>
          {this.label.toUpperCase()}
        </Text>
      </View>
    );
    if (this.onPress) {
      button = (
        <TouchableNativeFeedback
          onPress={this.onPress}
        >
          {button}
        </TouchableNativeFeedback>
      );
    }
    return (
      <View ref={component => { this._root = component; }}>
        {button}
      </View>
    );
  }
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func,
};
