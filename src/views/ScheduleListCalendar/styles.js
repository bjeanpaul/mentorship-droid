import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


const calendarFontSize = 14;


export default StyleSheet.create({
  calendarContainer: {
    flex: 1,
  },
  calendarControls: {
    alignItems: 'center',
    backgroundColor: colors.CALENDAR_CONTROLS_BG,
    paddingVertical: 7,
    paddingHorizontal: 23,
  },
  controlButtonText: {
    margin: 0,
    fontFamily: FONT.REGULAR,
    fontSize: 24,
    color: colors.CALENDAR_CONTROLS_TEXT,
  },
  calendarHeading: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: colors.CALENDAR_HEADING,
    paddingBottom: 7,
  },
  dayHeading: {
    fontFamily: FONT.REGULAR,
    fontSize: calendarFontSize,
    color: colors.CALENDAR_DAY_HEADING,
    marginVertical: 0,
  },
  weekendHeading: {
    fontFamily: FONT.REGULAR,
    fontSize: calendarFontSize,
    color: colors.CALENDAR_WEEKEND_HEADING,
    marginVertical: 0,
  },
  title: {
    margin: 0,
    marginTop: 4,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 20,
    textAlign: 'center',
    color: colors.CALENDAR_TITLE,
  },
  dayButton: {
    padding: 0,
    borderTopWidth: 0,
    flex: 1,
    justifyContent: 'center',
  },
  dayButtonFiller: {
    padding: 0,
  },
  day: {
    fontFamily: FONT.REGULAR,
    fontSize: calendarFontSize,
    color: colors.CALENDAR_WEEKEND_DAY_TEXT,
  },
  weekendDayText: {
    fontFamily: FONT.REGULAR,
    fontSize: calendarFontSize,
    color: colors.CALENDAR_WEEKEND_DAY_TEXT,
  },
  monthContainer: {
    flex: 1,
    backgroundColor: colors.CALENDAR_MONTH_CONTAINER,
  },
  weekRow: {
    flex: 1,
  },
  eventIndicator: {
    backgroundColor: colors.CALENDAR_EVENT_BG,
  },
  eventIndicatorFiller: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginTop: -6,
  },
  currentDayText: {
    color: colors.CALENDAR_CURRENT_DAY_TEXT,
  },
  currentDayCircle: {
    backgroundColor: colors.CALENDAR_CURRENT_DAY_BG,
  },
  dayCircleFiller: {
    width: 30,
    height: 30,
    borderRadius: 30,
    zIndex: 9,
  },
  selectedDayCircle: {
    backgroundColor: colors.CALENDAR_SELECTED_DAY_BG,
  },
});
