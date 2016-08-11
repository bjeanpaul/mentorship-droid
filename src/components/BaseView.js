import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import COLOR from 'src/constants/colors';


const styles = StyleSheet.create({
  view: {
    backgroundColor: COLOR.DEFAULT_BG,
    flex: 1,
  },
});

const BaseView = ({
  children,
  style,
  statusBarBackgroundColor = COLOR.DEFAULT_STATUS_BG,
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
  children: React.PropTypes.node,
  style: React.PropTypes.any,
};
export default BaseView;
