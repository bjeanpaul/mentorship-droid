import React, { PropTypes } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';

import { BaseView, Toolbar, Text } from 'src/components';
import IMAGE_DISMISS_ICON from 'app/assets/close-light.png';

const styles = StyleSheet.create({
  baseView: {
    padding: 16,
    backgroundColor: '#f57650',
  },
  dismissButton: {
  },
  message: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.35)',
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
      <StatusBar backgroundColor="#935943" />
      {dismissButton}
      <Text style={styles.message}>{message}</Text>
    </BaseView>
  );
};
LoadingOverlay.propTypes = {
  dismiss: PropTypes.bool,
  message: PropTypes.string,
};
export default LoadingOverlay;
