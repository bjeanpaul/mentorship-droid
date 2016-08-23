import React, { PropTypes } from 'react';
import styles, { themes } from './styles';
import Text from 'src/components/Text';


export const Title = ({
  style = {},
  children = '',
  theme = themes.default,
}) => (
  <Text style={[styles.title, theme.title, style]}>
    {children}
  </Text>
);

Title.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
  theme: PropTypes.object,
};


export default Title;
export { themes };
