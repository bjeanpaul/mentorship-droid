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

  constructor(props) {
    super(props);
    this.borderColor = props.borderColor || '#f77040';
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View
        ref={component => { this._root = component; }}
        style={[styles.button, this.props.style, { borderColor: this.borderColor }]}
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
