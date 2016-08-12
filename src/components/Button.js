import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';

import Text from 'Text';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


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
    fontFamily: FONT.BOLD,
    fontSize: 13,
    fontWeight: FONT_WEIGHT.BOLD,
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
