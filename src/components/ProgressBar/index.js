import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

const ProgressBar = ({
  completed,
}) => (
  <View style={styles.bar}>
    <View style={[styles.completed, { flex: completed }]} />
    <View style={{ flex: 1.0 - completed }} />
  </View>
);

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
};

export default ProgressBar;
