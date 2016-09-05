import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback, Image } from 'react-native';

import { Text } from 'src/components';
import styles from './styles';
import images from 'src/constants/images';


export const NAV_TAB_ACTIVITIES = 'NAV_TAB_ACTIVITIES';
export const NAV_TAB_CHAT = 'NAV_TAB_CHAT';
export const NAV_TAB_COMMUNITY = 'NAV_TAB_COMMUNITY';
export const NAV_TAB_JOURNEY = 'NAV_TAB_JOURNEY';
export const NAV_TAB_SCHEDULED_CALLS = 'NAV_TAB_SCHEDULED_CALLS';


const tabs = {
  activities: NAV_TAB_ACTIVITIES,
  journey: NAV_TAB_JOURNEY,
  scheduledCalls: NAV_TAB_SCHEDULED_CALLS,
};


const icons = {
  NAV_TAB_ACTIVITIES: images.NAV_TAB_ACTIVITIES,
  NAV_TAB_CHAT: images.NAV_TAB_CHAT,
  NAV_TAB_COMMUNITY: images.NAV_TAB_COMMUNITY,
  NAV_TAB_JOURNEY: images.NAV_TAB_JOURNEY,
  NAV_TAB_SCHEDULED_CALLS: images.NAV_TAB_SCHEDULED_CALLS,
};


const titles = {
  NAV_TAB_ACTIVITIES: 'Activities',
  NAV_TAB_CHAT: 'Chat',
  NAV_TAB_COMMUNITY: 'Community',
  NAV_TAB_JOURNEY: 'Journey',
  NAV_TAB_SCHEDULED_CALLS: 'Calls',
};


export const NavTabBar = ({
  activeTab,
  onTabPress,
}) => (
  <View style={styles.bar}>
    <NavTab
      uid={NAV_TAB_JOURNEY}
      onPress={onTabPress}
      type={NAV_TAB_JOURNEY}
      active={activeTab === NAV_TAB_JOURNEY}
    />

    <NavTab
      uid={NAV_TAB_ACTIVITIES}
      onPress={onTabPress}
      type={NAV_TAB_ACTIVITIES}
      active={activeTab === NAV_TAB_ACTIVITIES}
    />

    <NavTab
      uid={NAV_TAB_SCHEDULED_CALLS}
      onPress={onTabPress}
      type={NAV_TAB_SCHEDULED_CALLS}
      active={activeTab === NAV_TAB_SCHEDULED_CALLS}
    />
  </View>
);


export const NavTab = ({
  type,
  active,
  onPress,
}) => (
  <TouchableNativeFeedback onPress={() => !active && onPress(type)}>
    <View>
      <Image
        source={icons[type]}
        style={[styles.tab, active && styles.tabIsActive]}
      />

      {active && <Text style={styles.tabLabel}>{titles[type]}</Text>}
    </View>
  </TouchableNativeFeedback>
);


NavTabBar.tabs = tabs;


NavTabBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabPress: PropTypes.func.isRequired,
};


NavTab.propTypes = {
  type: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};


export default NavTabBar;
