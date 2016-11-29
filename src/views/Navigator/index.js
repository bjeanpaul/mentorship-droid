import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { NavTabBar } from 'src/components';
import { NAV_TAB_ROUTES } from 'src/constants/routes';
import * as constants from 'src/constants/navigation';


const Navigator = ({
  routes,
  activeTab,
  onTabPress,
}) => {
  const Route = routes[NAV_TAB_ROUTES[activeTab]];

  return (
    <View style={styles.default}>
      {Route && <Route />}

      <NavTabBar
        activeTab={activeTab}
        onTabPress={onTabPress}
      />
    </View>
  );
};


Navigator.propTypes = {
  routes: PropTypes.object.isRequired,
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
