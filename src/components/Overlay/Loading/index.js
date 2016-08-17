import React, { PropTypes } from 'react';
import { BaseView, Text, Image, SpinningImage } from 'src/components';
import styles from './styles';
import colors from 'src/constants/colors';

import IMAGE_DISMISS_ICON from 'app/assets/close-light.png';

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
      statusBarBackgroundColor={colors.OVERLAY_STATUS_BG}
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
