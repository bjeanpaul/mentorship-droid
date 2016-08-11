import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseView, Text, Button, Image } from 'src/components';

import COLORS from 'src/constants/colors';
import IMAGE_DISMISS_ICON from 'app/assets/close-light.png';
import IMAGE_DONE from 'app/assets/done-icon.png';


const styles = StyleSheet.create({
  baseView: {
    backgroundColor: COLORS.OVERLAY_BG,
  },
  topContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  bottomContainer: {
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
  bottomText: {
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
    <View style={styles.topContainer}>
      <Image
        style={styles.dismissButton}
        source={IMAGE_DISMISS_ICON}
      />
      <Image source={IMAGE_DONE} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>

    <View style={styles.bottomContainer}>
      <Button
        theme="white"
        handlePress={buttonHandlePress}
        label={buttonLabel}
      />
      {bottomText
        ? <Text style={styles.bottomText} onPress={() => bottomTextHandlePress}>
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
