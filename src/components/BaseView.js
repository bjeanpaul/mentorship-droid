import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
  },
});

const BaseView = ({
  children,
  style,
  statusBarBackgroundColor,
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
