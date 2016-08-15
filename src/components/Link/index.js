import React from 'react';
import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import Text from './Text';


const styles = StyleSheet.create({
  link: {
    fontSize: 14,
    color: colors.LINK_TEXT,
  },
});

const Link = (props) =>
  <Text style={[styles.link, props.style]}>{props.children}</Text>;
Link.propTypes = {
  style: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default Link;
