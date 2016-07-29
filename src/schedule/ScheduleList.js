import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import Calendar from 'react-native-calendar';

import { Text } from 'src/Components';
import { fontSize, fontWeight } from 'src/StyleSheet';

const styles = {
  calendarContainer: {
    flex: 1,
    backgroundColor: 'orange',
  },
  calendarControls: {
    height: 60,
    backgroundColor: '#003035',
  },
  controlButton: {
    marginLeft: 24,
    marginRight: 24,
  },
  controlButtonText: {
    fontFamily: 'Brandon Text',
    color: '#fff',
    fontSize: fontSize.xLarge,
  },
  title: {
    fontFamily: 'Brandon Text',
    fontSize: fontSize.xLarge,
    fontWeight: fontWeight.medium,
    textAlign: 'center',
    color: '#fff',
  },
  dayButton: {
    borderTopWidth: 0,
    flex: 1,
    justifyContent: 'center',
  },
  day: {
    fontFamily: 'Brandon Text',
    fontSize: fontSize.small,
  },
  weekendDayText: {
    fontFamily: 'Brandon Text',
    fontSize: fontSize.small,
    color: '#c0cbcc',
  },
  monthContainer: {
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
    fontFamily: 'Brandon Text',
    fontSize: fontSize.small,
    color: '#80979a',
  },
  weekendHeading: { // day of the week, weekend baby
    fontFamily: 'Brandon Text',
    fontSize: fontSize.small,
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
};

const CallInfo = ({
  <View style={{
      flex: 1,
    }}>
    <Text></Text>
  </View>
}) => {

}


const ScheduleList = ({
  calls,
}) => {

  calls = [
    '2016-07-03',
    '2016-07-05',
    '2016-07-28',
    '2016-07-30'
  ];

  styles.monthContainer.height = Dimensions.get('window').height - 328;

  return (
    <View style={{
      flex: 1,
    }}>
      <StatusBar backgroundColor="#003035" />
      <Calendar
        eventDates={calls}
        showControls
        titleFormat="MMMMM YYYY"
        prevButtonText="<"
        nextButtonText=">"
        onDateSelect={(date) => console.warn('selectedDate:', date)}
        onTouchPrev={() => console.log('Back TOUCH')}     // eslint-disable-line no-console
        onTouchNext={() => console.log('Forward TOUCH')}  // eslint-disable-line no-console
        onSwipePrev={() => console.log('Back SWIPE')}     // eslint-disable-line no-console
        onSwipeNext={() => console.log('Forward SWIPE')}  // eslint-disable-line no-console
        customStyle={styles}
      />

      <CallInfo />

    </View>
  );
}

export default ScheduleList;
