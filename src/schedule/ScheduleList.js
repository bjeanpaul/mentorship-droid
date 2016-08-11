import React, { PropTypes } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Calendar from 'react-native-calendar';

import { Label, Text } from 'src/components';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';

const styles = StyleSheet.create({
  callInfoContainer: {
    backgroundColor: '#dfe5e6',
    padding: 24,
  },
  callInfoText: {
    textAlign: 'left',
    color: '#003035',
    fontSize: 18,
  },
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

// TODO: Default state when call isn't selectedDate
// TODO: Abstract away the calendar view into another component.
// TODO: Define the shape of the calls array objects.
class ScheduleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
  }

  renderCallInfo() {

    const {
      date
      activityName:
    }

    if (this.state.selectedDate) {
      return (
        <View style={styles.callInfoContainer}>
          <Label title="CALL SCHEDULED FOR:" />
          <Text style={styles.callInfoText}></Text>
          <Text style={styles.callInfoText}>{activityName}</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.callInfoContainer} />
      );
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
      }}
      >
        <StatusBar backgroundColor="#003035" />
        <Calendar
          eventDates={this.props.calls}
          showControls
          prevButtonText="<"
          nextButtonText=">"
          onDateSelect={(selectedDate) => this.setState({ selectedDate })}
          customStyle={styles}
        />
        {this.renderCallInfo()}
      </View>
    );
  }
}
ScheduleList.propTypes = {
  calls: React.PropTypes.arrayOf,
};

export default ScheduleList;
