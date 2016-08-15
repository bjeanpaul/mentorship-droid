import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';

import { BaseView, Text, Image } from 'src/components';
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
  title: {
    fontSize: 20,
    color: COLORS.OVERLAY_TEXT,
    paddingBottom: 80,
  },
});

const LoadingOverlay = ({
  title,
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
    <BaseView
      statusBarBackgroundColor={COLORS.OVERLAY_STATUS_BG}
      style={styles.baseView}
    >
      {dismissButton}
      <SpinningImage />
      <Text style={styles.title}>{title}</Text>
    </BaseView>
  );
};
LoadingOverlay.propTypes = {
  dismiss: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
export default LoadingOverlay;
