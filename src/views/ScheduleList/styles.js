import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  calendarContainer: {
    flex: 0.79,
    paddingBottom: 10,
  },
  addButton: {
    position: 'absolute',
    top: -28,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: colors.BUTTON_BG,
  },
  addButtonIsDisabled: {
    backgroundColor: colors.SCHEDULE_ADD_BUTTON_DISABLED_BG,
  },
  callInfoContainer: {
    flex: 0.21,
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colors.SCHEDULE_INFO_CALL_INFO_BG,
    justifyContent: 'flex-start',
  },
  callInfoLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  callInfoText: {
    fontSize: 17,
    textAlign: 'left',
    color: colors.SCHEDULE_LIST_CALL_INFO_TEXT,
  },
});
