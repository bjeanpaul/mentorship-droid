import React from 'react';
import Text from 'src/components/Text';
import styles from './styles';

const Link = (props) =>
  <Text style={[styles.link, props.style]}>{props.children}</Text>;
Link.propTypes = {
  style: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default Link;
