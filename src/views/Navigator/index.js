import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { NavTabBar } from 'src/components';
import styles from './styles';


const Navigator = ({
  children,
  activeTab,
  onTabPress,
}) => (
  <View style={styles.default}>
    {children}

    {
      activeTab
        ? <NavTabBar activeTab={activeTab} onTabPress={onTabPress} />
        : null
    }
  </View>
);


Navigator.propTypes = {
  activeTab: PropTypes.any,
  children: PropTypes.node.isRequired,
  onTabPress: PropTypes.func.isRequired,
};


export default Navigator;
