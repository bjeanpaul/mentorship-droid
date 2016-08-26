import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  header: {
    height: 64,
  },
  back: {
    top: 20,
  },
  tabGroup: {
    height: 40,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.CATEGORY_ACTIVE_TAB_BORDER,
  },
  tabTitle: {
    fontSize: 16,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: colors.TEXT_LIGHT,
    opacity: 0.5,
  },
  tabTitleActive: {
    opacity: 1,
  },
});
