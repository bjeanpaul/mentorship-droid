import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { BaseView, Text, Button } from 'src/components';
import styles from './styles';
import colors from 'src/constants/colors';

import IMAGE_DISMISS_ICON from 'app/assets/close-light.png';
import IMAGE_DONE from 'app/assets/done-icon.png';

// TODO: Dismiss Action
const CompletedOverlay = ({
  title,
  message,
  buttonLabel,
  onButtonPress,
  linkText,
  onLinkPress,
}) => (
  <BaseView
    style={styles.baseView}
    statusBarBackgroundColor={colors.OVERLAY_STATUS_BG}
  >
    <View style={styles.content}>
      <Image
        style={styles.dismissButton}
        source={IMAGE_DISMISS_ICON}
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={IMAGE_DONE}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>

    <View style={styles.footer}>
      <Button
        theme={Button.WhiteTheme}
        handlePress={onButtonPress}
        label={buttonLabel}
      />
      {linkText
        ? <Text style={styles.footerText} onPress={onLinkPress}>
            {linkText}
          </Text>
        : null
      }
    </View>
  </BaseView>
);
CompletedOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  linkText: PropTypes.string,
  onLinkPress: PropTypes.func,
};
export default CompletedOverlay;
