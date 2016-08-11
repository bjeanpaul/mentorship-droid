import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';

import Text from 'Text';
import COLORS from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 16,
    marginRight: 16,
  },
  button_orange: {
    backgroundColor: COLORS.BUTTON_BG,
  },
  button_white: {
    backgroundColor: COLORS.BUTTON_ALT_BG,
  },
  buttonDisabled: {
    backgroundColor: COLORS.BUTTON_DISABLED_BG,
  },
  label: {
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 13,
    letterSpacing: 1,
    marginTop: 15,
    marginBottom: 17,
  },
  label_orange: {
    color: COLORS.BUTTON_LABEL,
  },
  label_white: {
    color: COLORS.BUTTON_ALT_LABEL,
  },
  labelDisabled: {
    color: COLORS.BUTTON_DISABLED_LABEL,
  },
});

const Button = ({
  theme = 'orange',
  label,
  disabled,
  handlePress,
}) => {
  let button = (
    <View
      style={[
        styles.button,
        styles[`button_${theme}`],
        disabled && styles.buttonDisabled,
      ]}
    >
      <Text
        style={[
          styles.label,
          styles[`label_${theme}`],
          disabled && styles.labelDisabled,
        ]}
      >
        {label.toUpperCase()}
      </Text>
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
  theme: PropTypes.oneOf(['orange', 'white']),
};
export default Button;
