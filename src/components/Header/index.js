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
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  theme: PropTypes.object,
};


Header.themes = themes;


export default Header;
