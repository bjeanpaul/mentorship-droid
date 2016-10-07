import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';


export default StyleSheet.create({
  fieldset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
  },
  fieldError: {
    fontSize: 13,
    color: colors.TEXT_ERROR,
  },
  dateContainer: {
    flex: 0.6,
  },
  timeContainer: {
    flex: 0.4,
  },
  value: {
    flex: 1,
    flexDirection: 'row',
  },
  valueRemove: {
    alignItems: 'center',
    padding: 2,
  },
  valueRemoveIcon: {
    flex: -1,
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  valueText: {
    flex: 1,
    textAlign: 'left',
    color: colors.SCHEDULE_DETAIL_VALUE_TEXT,
    fontSize: 20,
  },
  valueTextRequired: {
    color: colors.SCHEDULE_DETAIL_VALUE_TEXT_REQUIRED,
  },
  valueContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 44,
    marginBottom: 44,
    borderBottomWidth: 1,
    borderBottomColor: colors.SCHEDULE_DETAIL_SEPARATOR,
  },
  body: {
    flex: 0.7,
  },
  footer: {
    flex: 0.3,
    justifyContent: 'center',
  },
  activityContainer: {
    flex: 1,
  },
});
