import React, { PropTypes } from 'react';
import styles, { themes } from './styles';
import Text from 'src/components/Text';


export const Title = ({
  style = {},
  children = '',
  theme = {},
}) => (
  <Text style={[styles.title, theme.title, style]}>
    {children}
  </Text>
);


Title.propTypes = {
  style: PropTypes.any,
  children: PropTypes.string,
  theme: PropTypes.object,
};


Title.themes = themes;


export default Title;
