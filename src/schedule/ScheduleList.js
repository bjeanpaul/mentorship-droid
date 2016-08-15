import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import Calendar from './ScheduleListCalendar';
import { BaseView, Label, Text } from 'src/components';

const styles = StyleSheet.create({
  callInfoContainer: {
    flex: 0.25,
    padding: 24,
    backgroundColor: '#dfe5e6',
    justifyContent: 'center',
  },
  callInfoText: {
    textAlign: 'left',
    color: '#003035',
    fontSize: 18,
  },
});

class ScheduleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
  }

  renderCallInfo() {
    let info;
    if (this.props.calls && this.state.selectedDate) {
      const call = this.props.calls.filter(
        (c) => c.date === this.state.selectedDate
      )[0];
      if (call) {
        info = (
          <View>
            <Label title="CALL SCHEDULED FOR:" />
            <Text style={styles.callInfoText}>
              {moment(call.date).format('dddd Do, MMMM YYYY')}
            </Text>
            <Text style={styles.callInfoText}>
              {call.activityName}
            </Text>
          </View>
        );
      }
    }
    return (<View style={styles.callInfoContainer}>{info}</View>);
  }

  render() {
    return (
      <BaseView>
        <StatusBar backgroundColor="#003035" />
        <Calendar
          dates={this.props.calls.map(call => call.date)}
          handleDateSelected={
            (date) => this.setState({
              selectedDate: moment(date).format('YYYY-MM-DD'),
            })
          }
        />
        {this.renderCallInfo()}
      </BaseView>
    );
  }
}
ScheduleList.propTypes = {
  calls: PropTypes.arrayOf(React.PropTypes.shape({
    date: React.PropTypes.string.isRequired,
    activityName: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default ScheduleList;
