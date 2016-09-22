import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


export default StyleSheet.create({
  calendarContainer: {
    flex: 1,
  },
  calendarControls: {
    backgroundColor: colors.CALENDAR_CONTROLS_BG,
  },
  controlButtonText: {
    fontFamily: FONT.REGULAR,
    fontSize: 24,
    color: colors.CALENDAR_CONTROLS_TEXT,
  },
  title: {
    paddingTop: 5,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 20,
    textAlign: 'center',
    color: colors.CALENDAR_TITLE,
  },
  dayButton: {
    borderTopWidth: 0,
    flex: 1,
    justifyContent: 'center',
  },
  day: {
    fontFamily: FONT.REGULAR,
    fontSize: 15,
  },
  weekendDayText: {
    fontFamily: FONT.REGULAR,
    fontSize: 15,
    color: colors.CALENDAR_WEEKEND_DAY_TEXT,
  },
  monthContainer: {
    flex: 1,
    backgroundColor: colors.CALENDAR_MONTH_CONTAINER,
  },
  weekRow: {
    flex: 1,
  },
  calendarHeading: {
    height: 44,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: colors.CALENDAR_HEADING,
  },
  dayHeading: { // day of the week, above the calendar
    fontFamily: FONT.REGULAR,
    fontSize: 15,
    color: colors.CALENDAR_DAY_HEADING,
  },
  weekendHeading: { // day of the week, weekend baby
    fontFamily: FONT.REGULAR,
    fontSize: 15,
    color: colors.CALENDAR_WEEKEND_HEADING,
  },
  eventIndicator: {
    backgroundColor: colors.CALENDAR_EVENT_BG,
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  currentDayCircle: {
    backgroundColor: colors.CALENDAR_CURRENT_DAY_BG,
  },
});
