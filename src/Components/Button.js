import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
} from 'react-native';

import { styles } from '../StyleSheet';


export class Button extends Component {

  constructor(props) {
    super(props);
    this.labelText = props.labelText;
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View
        ref={component => { this._root = component; }}
        style={[styles.button, this.buttonExtraStyle]}
      >
        <Text style={[styles.buttonText, this.buttonTextExtraStyle]}>
          {this.labelText.toUpperCase()}
        </Text>
      </View>
    );
  }
}
Button.propTypes = {
  labelText: PropTypes.string,
};


export class TransparentButton extends Button {

  constructor(props) {
    super(props);
    this.buttonExtraStyle = {
      backgroundColor: 'transparent',
    };
    this.buttonTextExtraStyle = {
      color: '#f77040',
    };
  }

}
