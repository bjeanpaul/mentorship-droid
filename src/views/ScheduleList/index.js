import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, StatusBar } from 'react-native';

import Calendar from 'src/views/ScheduleListCalendar';
import { BaseView, Label, Text } from 'src/components';

import styles from 'src/views/ScheduleList/styles';


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
          onDateSelect={
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
  calls: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    activityName: PropTypes.string.isRequired,
  })).isRequired,
};

export default ScheduleList;
