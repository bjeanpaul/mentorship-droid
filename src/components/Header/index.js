import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles, { themes } from './styles';


export const Header = ({
  style = {},
  children = [],
  theme = {},
}) => (
  <View style={[styles.header, theme.header, style]}>
    {children}
  </View>
);


Header.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};


Header.themes = themes;


export default Header;
