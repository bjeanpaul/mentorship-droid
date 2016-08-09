import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import { font } from 'src/app/styles';


const styles = StyleSheet.create({
  text: {
    fontFamily: font.brandonText,
    fontSize: 13,
    textAlign: 'center',
  },
});

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
