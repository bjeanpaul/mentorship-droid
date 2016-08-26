import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';


export default StyleSheet.create({
  activity: {
    padding: 16,
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: colors.CATEGORY_ACTIVITY_LIST_ITEM_BORDER,
    alignItems: 'flex-start',
  },
  activityIconContainer: {
    top: 24,
    position: 'absolute',
  },
  activityIcon: {
    width: 72,
    height: 72,
    borderRadius: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIconIsIncomplete: {
    backgroundColor: colors.CATEGORY_ACTIVITY_LIST_ICON_INCOMPLETE,
  },
  activityIconImage: {
    width: 50,
    height: 50,
  },
  activityCompleteAnnotation: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: -4,
    left: 52,
  },
  activityTitle: {
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 104,
  },
});
