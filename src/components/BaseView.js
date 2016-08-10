import React from 'react';
import { View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
  },
});

const BaseView = ({
  children,
  style,
}) => <View style={[styles.view, style]}>{children}</View>;

BaseView.propTypes = {
  children: React.PropTypes.node,
  style: React.PropTypes.any,
};
export default BaseView;
