import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import Calendar from 'react-native-calendar';

import { Text } from 'src/components';
import { fontSize, fontWeight } from 'src/StyleSheet';

const styles = {
  calendarContainer: {
    flex: 1,
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
  date,
  activity,
  style,
}) => {
  return (
    <View style={[{
      padding: 25,
      paddingTop: 20,
      paddingBottom: 20,
    }, style]}>
      <Text style={{
        fontWeight: fontWeight.bold,
        fontSize: fontSize.xSmall,
        textAlign: 'left',
        color: '#80979a',
      }}>CALL SCHEDULED FOR:</Text>
      <Text style={{
          textAlign: 'left',
          color: '#003035',
          fontSize: fontSize.large,
        }}>{date}</Text>
      <Text style={{
          textAlign: 'left',
          color: '#003035',
          fontSize: fontSize.large,
        }}>{activity}</Text>
    </View>
  );
}


class ScheduleList extends React.Component {


  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.renderCallInfo = this.renderCallInfo.bind(this);
  }

  renderCallInfo() {
    // TOOD: Filter calls; and grab the correct information;
    if (this.state.selectedDate) {

      console.log('yoyooy')

      return (<CallInfo
        style={{ flex: 1 }}
        date="Thu, Apr 13, 2:00pm"
        activity="Find out who you are and what you do"
      />);
    }
    return <View />;
  }


  render() {

    return (
      <View style={{
        flex: 1,
      }}>
        <StatusBar backgroundColor="#003035" />
        <Calendar
          eventDates={this.props.calls}
          showControls
          prevButtonText="<"
          nextButtonText=">"
          onDateSelect={(selectedDate) => this.setState({ selectedDate })}
          customStyle={styles}
        />

        <View style={{
          flex: .3,
          backgroundColor: '#dfe5e6',
        }}>
          {this.renderCallInfo()}
        </View>
      </View>
    );
  }
}

export default ScheduleList;
