import React, { PropTypes } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { BaseView, Text, Button } from 'src/components';

import colors from 'src/constants/colors';
import IMAGE_DISMISS_ICON from 'app/assets/close-light.png';
import IMAGE_DONE from 'app/assets/done-icon.png';


const styles = StyleSheet.create({
  baseView: {
    backgroundColor: colors.OVERLAY_BG,
  },
  content: {
    flex: 0.7,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: 80,
    width: 80,
  },
  footer: {
    paddingBottom: 16,
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  dismissButton: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  title: {
    fontSize: 20,
    color: colors.OVERLAY_TEXT,
  },
  message: {
    fontSize: 24,
    color: colors.OVERLAY_MESSAGE,
  },
  footerText: {
    margin: 16,
    marginBottom: 0,
    fontSize: 14,
  },
});

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
