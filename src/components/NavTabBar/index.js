import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback, Image } from 'react-native';

import { Text } from 'src/components';
import styles from './styles';
import images from 'src/constants/images';
import * as constants from 'src/constants/navigation';


const tabs = [
  constants.NAV_TAB_ACTIVITIES,
  constants.NAV_TAB_JOURNEY,
  constants.NAV_TAB_SCHEDULED_CALLS,
  constants.NAV_TAB_CHAT,
];


const icons = {
  NAV_TAB_ACTIVITIES: images.NAV_TAB_ACTIVITIES,
  NAV_TAB_CHAT: images.NAV_TAB_CHAT,
  NAV_TAB_COMMUNITY: images.NAV_TAB_COMMUNITY,
  NAV_TAB_JOURNEY: images.NAV_TAB_JOURNEY,
  NAV_TAB_SCHEDULED_CALLS: images.NAV_TAB_SCHEDULED_CALLS,
};


const activeIcons = {
  NAV_TAB_ACTIVITIES: images.NAV_TAB_ACTIVITIES_ACTIVE,
  NAV_TAB_CHAT: images.NAV_TAB_CHAT_ACTIVE,
  NAV_TAB_COMMUNITY: images.NAV_TAB_COMMUNITY_ACTIVE,
  NAV_TAB_JOURNEY: images.NAV_TAB_JOURNEY_ACTIVE,
  NAV_TAB_SCHEDULED_CALLS: images.NAV_TAB_SCHEDULED_CALLS_ACTIVE,
};


const titles = {
  NAV_TAB_ACTIVITIES: 'Activities',
  NAV_TAB_CHAT: 'Messages',
  NAV_TAB_COMMUNITY: 'Community',
  NAV_TAB_JOURNEY: 'Journey',
  NAV_TAB_SCHEDULED_CALLS: 'Calls',
};


export const NavTabBar = ({
  activeTab,
  onTabPress,
}) => (
  <View style={styles.bar}>
    {
      tabs.map(tab => (
        <NavTab
          uid={tab}
          type={tab}
          key={tab}
          onPress={onTabPress}
          active={activeTab === tab}
        />))
    }
  </View>
);


export const NavTab = ({
  type,
  active,
  onPress,
}) => (
  <TouchableNativeFeedback onPress={() => !active && onPress(type)}>
    <View style={styles.tab}>
      <Image
        source={
          active
            ? activeIcons[type]
            : icons[type]
        }
        style={styles.tabIcon}
      />

      {
        active
          ? <Text style={[styles.tabTitle, active && styles.tabTitleIsActive]}>
            {titles[type]}
          </Text>
          : null
      }
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
