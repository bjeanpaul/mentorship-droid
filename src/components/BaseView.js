import React from 'react';
import { View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
  },
});

const BaseView = ({ children }) =>
  <View style={styles.view}>{children}</View>;
BaseView.propTypes = {
  children: React.PropTypes.node,
};
export default BaseView;
