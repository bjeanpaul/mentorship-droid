import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback, Image } from 'react-native';

import { Text } from 'src/components';
import styles from './styles';
import images from 'src/constants/images';
import * as constants from 'src/constants/navigation';


const tabSpecs = [{
  tabKey: constants.NAV_TAB_ACTIVITIES,
  icon: images.NAV_TAB_ACTIVITIES,
  iconActive: images.NAV_TAB_ACTIVITIES_ACTIVE,
  title: 'Activities',
}, {
  tabKey: constants.NAV_TAB_JOURNEY,
  icon: images.NAV_TAB_JOURNEY,
  iconActive: images.NAV_TAB_JOURNEY_ACTIVE,
  title: 'Journey',
}, {
  tabKey: constants.NAV_TAB_SCHEDULED_CALLS,
  icon: images.NAV_TAB_SCHEDULED_CALLS,
  iconActive: images.NAV_TAB_SCHEDULED_CALLS_ACTIVE,
  title: 'Calls',
}, {
  tabKey: constants.NAV_TAB_CHAT,
  icon: images.NAV_TAB_CHAT,
  iconActive: images.NAV_TAB_CHAT_ACTIVE,
  title: 'Chat',
}];


export const NavTabBar = ({
  activeTab,
  onTabPress,
}) => (
  <View style={styles.bar}>
  {
    tabSpecs.map(({ tabKey, ...spec }) => (
      <NavTab
        uid={tabKey}
        tabKey={tabKey}
        key={tabKey}
        onPress={onTabPress}
        active={activeTab === tabKey}
        {...spec}
      />))
  }
  </View>
);


export const NavTab = ({
  tabKey,
  icon,
  iconActive,
  title,
  active,
  onPress,
}) => {
  return (
    <TouchableNativeFeedback onPress={() => !active && onPress(tabKey)}>
      <View style={styles.tab}>
        <Image
          source={
            !active
              ? icon
              : iconActive
          }
          style={styles.tabIcon}
        />

        {
          active
            ? <Text style={[styles.tabTitle, active && styles.tabTitleIsActive]}>
              {title}
            </Text>
            : null
        }
      </View>
    </TouchableNativeFeedback>
  );
};


NavTabBar.tabSpecs = tabSpecs;


NavTabBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabPress: PropTypes.func.isRequired,
};


NavTab.propTypes = {
  tabKey: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  iconActive: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};


export default NavTabBar;
