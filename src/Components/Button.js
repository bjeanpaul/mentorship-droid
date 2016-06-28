import React, {
  Component,
  PropTypes,
} from 'react';

import {
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
    borderColor: '#f77040',
    borderRadius: 5,
    marginLeft: 24,
    marginRight: 24,
  },
  buttonText: {
    fontFamily: 'Brandon Text',
    color: '#f77040',
    fontSize: 13,
    fontWeight: '600',
    margin: 16,
  },
});

export default class Button extends Component {

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View
        ref={component => { this._root = component; }}
        style={[styles.button, this.props.style]}
      >
        <Text style={[styles.buttonText]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}
Button.propTypes = {
  style: PropTypes.object,
};
