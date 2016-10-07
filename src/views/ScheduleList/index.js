import moment from 'moment';
import { find } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

import Calendar from 'src/views/ScheduleListCalendar';
import { BaseView, Label, Text } from 'src/components';

import images from 'src/constants/images';
import styles from 'src/views/ScheduleList/styles';


class ScheduleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.initialSelectedDate || moment().toISOString(),
    };

    this.onAddPress = this.onAddPress.bind(this);
    this.onDateSelect = this.onDateSelect.bind(this);
    this.onCallInfoPress = this.onCallInfoPress.bind(this);
  }

  onDateSelect(selectedDate) {
    this.setState({ selectedDate });
  }

  onCallInfoPress() {
    const call = this.getSelectedCall();
    return call && this.props.onCallChosen(call.id);
  }

  onAddPress() {
    this.props.onAddPress(this.state.selectedDate);
  }

  getSelectedCall() {
    const { selectedDate } = this.state;
    return selectedDate && this.findCall(selectedDate);
  }

  selectedDateIsInPast() {
    const { selectedDate } = this.state;
    return selectedDate && moment().isAfter(selectedDate, 'day');
  }

  findCall(date) {
    const calls = this.props.calls;
    return find(calls, ({ callTime }) => moment(callTime).isSame(date, 'day'));
  }

  callIsInFuture(call) {
    return moment(call.callTime).isAfter();
  }

  canAdd() {
    return !this.selectedDateIsInPast() && !this.getSelectedCall();
  }

  renderCallInfo() {
    const call = this.getSelectedCall();

    return (
      <TouchableNativeFeedback uid="callInfo" onPress={this.onCallInfoPress}>
        <View style={styles.callInfoContainer}>
          {
            call && <View>
              <Label style={styles.callInfoLabel} title="CALL SCHEDULED FOR:" />

              <Text style={styles.callInfoText}>
                {moment(call.callTime).format('ddd, MMM DD, h:mma')}
              </Text>

              {
                call.activity && <Text style={styles.callInfoText} numberOfLines={2}>
                  {call.activity.title}
                </Text>
              }
            </View>
          }
        </View>
      </TouchableNativeFeedback>
    );
  }

  render() {
    const canAdd = this.canAdd();

    return (
      <BaseView>
        <View style={styles.calendarContainer}>
          <Calendar
            dates={this.props.calls.map(call => call.callTime)}
            onDateSelect={this.onDateSelect}
          />
        </View>

        <View>
          <TouchableWithoutFeedback uid="add" onPress={() => canAdd && this.onAddPress()}>
            <View style={[styles.addButton, !canAdd && styles.addButtonIsDisabled]}>
              <Image source={images.PLUS_LIGHT} />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {this.renderCallInfo()}
      </BaseView>
    );
  }
}


ScheduleList.propTypes = {
  initialSelectedDate: PropTypes.string,

  onAddPress: PropTypes.func.isRequired,
  onCallChosen: PropTypes.func.isRequired,

  calls: PropTypes.arrayOf(PropTypes.shape({
    callTime: PropTypes.string.isRequired,
    activity: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default ScheduleList;
