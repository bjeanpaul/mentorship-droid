import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';


export default StyleSheet.create({
  container: {
    paddingTop: 3,
    paddingLeft: 24,
    paddingRight: 24,
  },
  section: {
    paddingBottom: 46,
  },
  sectionItem: {
    borderBottomColor: colors.PROFILE_SETTINGS_SECTION_ITEM_DIVIDER,
    borderBottomWidth: 1,
  },
  sectionItemText: {
    paddingVertical: 30,
  },
});
