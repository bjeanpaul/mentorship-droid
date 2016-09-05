import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  bar: {
    height: 56,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.DEFAULT_BG,
    borderTopColor: colors.NAV_TAB_BAR_BORDER,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
  },
  tabIconIsActive: {
    tintColor: colors.NAV_TAB_ACTIVE,
  },
  tabTitle: {
    fontSize: 12,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  tabTitleIsActive: {
    color: colors.NAV_TAB_ACTIVE,
  },
});
