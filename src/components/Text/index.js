import React from 'react';
import { Text as RNText } from 'react-native';
import styles from './styles';

const Text = (props) =>
  <RNText
    {...props}
    style={[styles.text, props.style]}
  >
    {props.children}
  </RNText>;

Text.propTypes = {
  children: React.PropTypes.node,
  style: React.PropTypes.any,
};

export default Text;
