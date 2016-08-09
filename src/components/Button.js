import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';

import Text from 'Text';
import { font, fontWeight } from 'src/app/styles';


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f77040',
    borderRadius: 5,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonDisabled: {
    backgroundColor: '#dfe5e6',
  },
  label: {
    color: '#fff',
    fontFamily: font.brandonTextBold,
    fontSize: 13,
    fontWeight: fontWeight.bold,
    letterSpacing: 1,
    marginTop: 15,
    marginBottom: 17,
  },
});

const Button = ({
  label,
  disabled,
  handlePress,
}) => {
  let button = (
    <View style={[styles.button, disabled && styles.buttonDisabled]}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </View>
  );
  if (!disabled) {
    button = (
      <TouchableNativeFeedback onPress={handlePress}>
        {button}
      </TouchableNativeFeedback>
    );
  }
  return button;
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
export default Button;
