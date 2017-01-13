import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';


const Bubble = ({
  children,
  style,
}) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);


Bubble.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};


export default Bubble;
