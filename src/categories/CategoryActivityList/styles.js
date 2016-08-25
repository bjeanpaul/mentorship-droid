import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  activity: {
    padding: 16,
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: colors.CATEGORY_ACTIVITY_LIST_ITEM_BORDER,
    justifyContent: 'center',
  },
  activityTitle: {
    fontSize: 18,
    textAlign: 'left',
  },
});
