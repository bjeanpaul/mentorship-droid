import { noop } from 'lodash';
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import Icon from 'src/components/Icon';
import styles from './styles';


const HeaderIcon = ({
  type,
  style = {},
  onPress = noop,
}) => (
  <View style={[styles.default, style]} onPress={onPress}>
    <Icon type={type} />
  </View>
);


HeaderIcon.types = Icon.types;


HeaderIcon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.any,
  onPress: PropTypes.func,
};


export default HeaderIcon;
