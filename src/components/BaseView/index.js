import React from 'react';
import { View } from 'react-native';

import styles from './styles';


const BaseView = ({
  children,
  style,
}) => (
  <View style={[styles.view, style]}>
    {children}
  </View>
);


BaseView.propTypes = {
  children: React.PropTypes.any,
  style: React.PropTypes.any,
};


export default BaseView;
