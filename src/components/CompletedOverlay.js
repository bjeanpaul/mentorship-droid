import React, { PropTypes } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { BaseView, Text, Button } from 'src/components';

import COLORS from 'src/constants/colors';
import IMAGE_DISMISS_ICON from 'app/assets/close-light.png';
import IMAGE_DONE from 'app/assets/done-icon.png';


const styles = StyleSheet.create({
  baseView: {
    backgroundColor: COLORS.OVERLAY_BG,
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
    color: COLORS.OVERLAY_TEXT,
  },
  message: {
    fontSize: 24,
    color: COLORS.OVERLAY_MESSAGE,
  },
  footerText: {
    padding: 16,
    fontSize: 14,
  },
});

// TODO: Dismiss Action
const CompletedOverlay = ({
  title,
  message,
  buttonLabel,
  buttonHandlePress,
  bottomText,
  bottomTextHandlePress,
}) => (
  <BaseView
    style={styles.baseView}
    statusBarBackgroundColor={COLORS.OVERLAY_STATUS_BG}
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
        theme="white"
        handlePress={buttonHandlePress}
        label={buttonLabel}
      />
      {bottomText
        ? <Text style={styles.footerText} onPress={() => bottomTextHandlePress}>
          {bottomText}
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
  buttonHandlePress: PropTypes.func.isRequired,
  bottomText: PropTypes.string,
  bottomTextHandlePress: PropTypes.func,
};
export default CompletedOverlay;
