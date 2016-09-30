import { map } from 'lodash';
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { NavTabBar } from 'src/components';
import * as constants from 'src/constants/navigation';
import NavigationStack from 'src/components/NavigationStack';


const Navigator = ({
  navigationStates,
  activeTab = constants.NAV_TAB_ACTIVITIES,
  routes,
  onTabPress,
}) => (
  <View style={styles.default}>
    {map(navigationStates, (navigationState, tab) => (
      activeTab === tab
        ? <NavigationStack
          key={tab}
          routes={routes}
          navigationState={navigationStates[tab]}
        />
        : null
    ))}

    <NavTabBar
      activeTab={activeTab}
      onTabPress={onTabPress}
    />
  </View>
);


Navigator.propTypes = {
  routes: PropTypes.object.isRequired,
  navigationStates: PropTypes.object.isRequired,
  onTabPress: PropTypes.func.isRequired,
  activeTab: PropTypes.oneOf([
    constants.NAV_TAB_ACTIVITIES,
    constants.NAV_TAB_CHAT,
    constants.NAV_TAB_COMMUNITY,
    constants.NAV_TAB_JOURNEY,
    constants.NAV_TAB_SCHEDULED_CALLS,
  ]),
};


export default Navigator;
