import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  fieldset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
  },
  dateContainer: {
    flex: 0.6,
  },
  timeContainer: {
    flex: 0.4,
  },
  value: {
    textAlign: 'left',
    color: colors.SCHEDULE_DETAIL_VALUE_TEXT,
    fontSize: 20,
  },
  valueRequired: {
    color: colors.SCHEDULE_DETAIL_VALUE_TEXT_REQUIRED,
  },
  separator: {
    margin: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.SCHEDULE_DETAIL_SEPARATOR,
  },
  body: {
    flex: 0.7,
  },
  footer: {
    flex: 0.3,
  }
});
