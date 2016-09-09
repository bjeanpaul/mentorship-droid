import { noop } from 'lodash';
import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

import Icon from 'src/components/Icon';
import styles from './styles';


const HeaderIcon = ({
  type,
  style = {},
  onPress = noop,
}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={[styles.default, style]}>
      <Icon type={type} />
    </View>
  </TouchableNativeFeedback>
);


HeaderIcon.types = Icon.types;


HeaderIcon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.any,
  onPress: PropTypes.func,
};


export default HeaderIcon;
