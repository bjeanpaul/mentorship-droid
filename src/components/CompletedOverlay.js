import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';

import { BaseView, Text, Button, Image } from 'src/components';

import COLORS from 'src/constants/colors';
import IMAGE_DISMISS_ICON from 'app/assets/close-light.png';
import IMAGE_DONE from 'app/assets/done-icon.png';


const styles = StyleSheet.create({
  baseView: {
    backgroundColor: COLORS.OVERLAY_BG,
    justifyContent: 'center',
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
    marginBottom: 45,
  },
});

// TODO: Dismiss Action
const CompletedOverlay = ({
  title,
  message,
  buttonLabel,
  buttonHandlePress,
}) => (
  <BaseView
    style={styles.baseView}
    statusBarBackgroundColor={COLORS.OVERLAY_STATUS_BG}
  >
    <Image
      style={styles.dismissButton}
      source={IMAGE_DISMISS_ICON}
    />
    <Image source={IMAGE_DONE} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.message}>{message}</Text>

    <Button
      theme="white"
      handlePress={buttonHandlePress}
      label={buttonLabel}
    />
  </BaseView>
);

CompletedOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  buttonHandlePress: PropTypes.func.isRequired,
};
export default CompletedOverlay;
