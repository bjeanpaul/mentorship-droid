import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import Text from 'src/components/Text';
import styles, { themes, layouts } from './styles';


const Button = ({
  theme = themes.default,
  layout = layouts.default,
  label,
  disabled,
  onPress,
}) => {
  let button = (
    <View
      style={[
        styles.container,
        theme.container,
        layout,
        disabled && theme.containerIsDisabled,
      ]}
    >
      <Text
        style={[
          styles.title,
          theme.title,
          disabled && theme.titleIsDisabled,
        ]}
      >
        {label.toUpperCase()}
      </Text>
    </View>
  );
  if (!disabled) {
    button = (
      <TouchableNativeFeedback onPress={onPress}>
        {button}
      </TouchableNativeFeedback>
    );
  }
  return button;
};


Button.themes = themes;
Button.layouts = layouts;


Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf([
    themes.default,
    themes.light,
    themes.transparent,
  ]),
  layout: PropTypes.oneOf([
    layouts.default,
    layouts.inline,
  ]),
};


export default Button;
