import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

const ProgressBar = ({
  progress,
}) => (
  <View style={styles.progressBar}>
    <View style={[styles.progressIndicator, { flex: progress }]} />
  </View>
);

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
