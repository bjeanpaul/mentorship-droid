import moment from 'moment';
import { find } from 'lodash';
import React, { PropTypes } from 'react';
import { View } from 'react-native';

import Calendar from 'src/views/ScheduleListCalendar';
import { BaseView, Label, Text } from 'src/components';

import styles from 'src/views/ScheduleList/styles';


class ScheduleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.initialSelectedDate,
    };

    this.onDateSelect = this.onDateSelect.bind(this);
  }

  onDateSelect(callTime) {
    this.setState({ selectedDate: callTime });
  }

  renderCallInfo() {
    const { selectedDate } = this.state;
    const { scheduledCalls } = this.props;

    const call = selectedDate && find(scheduledCalls, ({ callTime }) => (
      moment(callTime).isSame(selectedDate, 'day')));

    return (
      <View style={styles.callInfoContainer}>
        {
          call && <View>
            <Label title="CALL SCHEDULED FOR:" />

            <Text style={styles.callInfoText}>
              {moment(call.callTime).format('dddd Do, MMMM YYYY')}
            </Text>

            {
              call.activity && <Text style={styles.callInfoText}>
                {call.activity.title}
              </Text>
            }
          </View>
        }
      </View>
    );
  }

  render() {
    return (
      <BaseView>
        <Calendar
          dates={this.props.scheduledCalls.map(call => call.callTime)}
          onDateSelect={this.onDateSelect}
        />
        {this.renderCallInfo()}
      </BaseView>
    );
  }
}


ScheduleList.propTypes = {
  initialSelectedDate: PropTypes.string,
  scheduledCalls: PropTypes.arrayOf(PropTypes.shape({
    callTime: PropTypes.string.isRequired,
    activity: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default ScheduleList;
