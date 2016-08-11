import React, { PropTypes } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';

import { BaseView, Text } from 'src/components';
import SpinningImage from './SpinningImage';
import COLORS from 'src/constants/colors';
import IMAGE_DISMISS_ICON from 'app/assets/close-light.png';

const styles = StyleSheet.create({
  baseView: {
    padding: 24,
    backgroundColor: COLORS.OVERLAY_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dismissButton: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  message: {
    fontSize: 20,
    color: COLORS.OVERLAY_TEXT,
    paddingBottom: 80,
  },
});

const LoadingOverlay = ({
  message,
  dismiss,
}) => {
  let dismissButton;

  if (dismiss) {
    dismissButton = (
      <Image
        style={styles.dismissButton}
        source={IMAGE_DISMISS_ICON}
      />
    );
  }

  return (
    <BaseView style={styles.baseView}>
      <StatusBar backgroundColor={COLORS.OVERLAY_STATUS_BG} />
      {dismissButton}
      <SpinningImage />
      <Text style={styles.message}>{message}</Text>
    </BaseView>
  );
};
LoadingOverlay.propTypes = {
  dismiss: PropTypes.bool,
  message: PropTypes.string,
};
export default LoadingOverlay;
