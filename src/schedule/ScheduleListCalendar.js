import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Calendar from 'react-native-calendar';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
  },
  calendarControls: {
    height: 60,
    backgroundColor: '#003035',
  },
  controlButton: {
  },
  controlButtonText: {
    fontFamily: FONT.REGULAR,
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
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
    color: '#c0cbcc',
  },
  monthContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  weekRow: {
    flex: 1,
  },
  calendarHeading: {
    height: 44,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#003035',
  },
  dayHeading: { // day of the week, above the calendar
    fontFamily: FONT.REGULAR,
    fontSize: 15,
    color: '#80979a',
  },
  weekendHeading: { // day of the week, weekend baby
    fontFamily: FONT.REGULAR,
    fontSize: 15,
    color: '#80979a',
  },
  eventIndicator: {
    backgroundColor: '#f77040',
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  currentDayCircle: {
    backgroundColor: '#97c13c',
  },
});

const ScheduleListCalendar = ({
  dates,
  handleDateSelected,
}) => (
  <Calendar
    eventDates={dates}
    showControls
    prevButtonText="<"
    nextButtonText=">"
    onDateSelect={handleDateSelected}
    customStyle={styles}
  />
);
ScheduleListCalendar.propTypes = {
  dates: PropTypes.array.isRequired,
  handleDateSelected: PropTypes.func.isRequired,
};
export default ScheduleListCalendar;
