import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import Text from 'src/components/Text';
import baseStyles, { themes, layouts, sizes } from './styles';


// NOTE: theme prop is being deprecated, provide themes via styles prop
const Button = ({
  theme = themes.default,
  layout,
  styles = {},
  children,
  disabled,
  onPress,
}) => {
  let button = (
    <View
      style={[
        baseStyles.container,
        theme.container,
        layout,
        styles.container,
        disabled && [
          theme.containerIsDisabled,
          styles.containerIsDisabled,
        ],
      ]}
    >
      <Text
        style={[
          baseStyles.title,
          theme.title,
          styles.title,
          disabled && [
            theme.titleIsDisabled,
            styles.titleIsDisabled,
          ],
        ]}
      >
        {children}
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
Button.sizes = sizes;


Button.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  theme: PropTypes.any,
  layout: PropTypes.any,
  styles: PropTypes.object,
};


export default Button;
