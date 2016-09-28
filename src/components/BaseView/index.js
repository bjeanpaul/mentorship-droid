import React from 'react';
import { View, StatusBar } from 'react-native';

import styles from './styles';
import colors from 'src/constants/colors';

const BaseView = ({
  children,
  style,
  statusBarBackgroundColor = colors.DEFAULT_STATUS_BG,
}) => (
  <View style={[styles.view, style]}>
    { statusBarBackgroundColor
      ? <StatusBar backgroundColor={statusBarBackgroundColor} />
      : null
    }
    {children}
  </View>
);
BaseView.propTypes = {
  statusBarBackgroundColor: React.PropTypes.string,
  children: React.PropTypes.any,
  style: React.PropTypes.any,
};
export default BaseView;
