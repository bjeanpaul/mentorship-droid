import React, { PropTypes } from 'react';
import Text from 'src/components/Text';
import styles from './styles';

const Link = (props) =>
  <Text
    style={[styles.link, props.style]}
    onPress={props.onPress}
  >
    {props.children}
  </Text>;
Link.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.any,
  children: PropTypes.any,
};

export default Link;
