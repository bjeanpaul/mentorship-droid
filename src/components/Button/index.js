import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import Text from 'src/components/Text';
import styles from './styles';


const THEME_DEFAULT = 'Default';
const THEME_WHITE = 'White';

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
