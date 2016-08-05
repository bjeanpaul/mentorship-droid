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
    backgroundColor: '#f77040',
    borderRadius: 5,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonIsDisabled: {
    backgroundColor: '#dfe5e6',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Brandon Text',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 17,
    letterSpacing: 1,
  },
});

export default class Button extends Component {

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    let button = (
      <View
        style={[
          styles.button,
          this.props.disabled ? styles.buttonIsDisabled : null,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
          ]}
        >
          {this.props.label.toUpperCase()}
        </Text>
      </View>
    );
    if (this.props.onPress && !this.props.disabled) {
      button = (
        <TouchableNativeFeedback onPress={this.props.onPress}>
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
  disabled: PropTypes.bool,
};
