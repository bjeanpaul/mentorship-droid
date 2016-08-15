import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';

import Text from 'Text';
import COLORS from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';

const THEME_DEFAULT = 'Default';
const THEME_WHITE = 'White';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonDefault: {
    backgroundColor: COLORS.BUTTON_BG,
  },
  buttonWhite: {
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
  labelDefault: {
    color: COLORS.BUTTON_LABEL,
  },
  labelWhite: {
    color: COLORS.BUTTON_ALT_LABEL,
  },
  labelDisabled: {
    color: COLORS.BUTTON_DISABLED_LABEL,
  },
});

const Button = ({
  theme = THEME_DEFAULT,
  label = '',
  disabled,
  handlePress,
}) => {
  let button = (
    <View
      style={[
        styles.button,
        styles[`button${theme}`],
        disabled && styles.buttonDisabled,
      ]}
    >
      <Text
        style={[
          styles.label,
          styles[`label${theme}`],
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
Button.DefaultTheme = THEME_DEFAULT;
Button.WhiteTheme = THEME_WHITE;
Button.propTypes = {
  label: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf([THEME_DEFAULT, THEME_WHITE]),
};
export default Button;
