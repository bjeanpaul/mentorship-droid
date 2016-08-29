import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, DatePickerAndroid, TimePickerAndroid, TouchableNativeFeedback,
  StyleSheet } from 'react-native';

import { BaseView, Text, Label, Toolbar, Button } from 'src/components';

import colors from 'src/constants/colors';

const styles = StyleSheet.create({
  fieldset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
  },
  dateContainer: {
    flex: 0.6,
  },
  timeContainer: {
    flex: 0.4,
  },
  value: {
    textAlign: 'left',
    color: colors.SCHEDULE_DETAIL_VALUE_TEXT,
    fontSize: 20,
  },
  valueRequired: {
    color: colors.SCHEDULE_DETAIL_VALUE_TEXT_REQUIRED,
  },
  separator: {
    margin: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.SCHEDULE_DETAIL_SEPARATOR,
  },
});


const Separator = () => <View style={styles.separator} />;

const Value = ({ value, placeholder }) => (
  <Text style={[styles.value, !value && styles.valueRequired]}>
    {value || placeholder}
  </Text>
);
Value.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
};


class ScheduleDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: this.props.initialDate,
      time: this.props.initialTime,
      activity: this.props.initialActivity,
    };

    this.handleDatePress = this.handleDatePress.bind(this);
    this.handleTimePress = this.handleTimePress.bind(this);
  }

  async handleDatePress() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: this.state.date ? moment(this.state.date).toDate() : new Date(),
      minDate: new Date(),
    });
    if (action === DatePickerAndroid.dateSetAction) {
      this.setState({
        date: moment(new Date(year, month, day)).format('YYYY-MM-DD'),
      });
    }
  }

  async handleTimePress() {
    const { action, hour, minute } = await TimePickerAndroid.open({
      is24Hour: true,
    });
    if (action === TimePickerAndroid.timeSetAction) {
      this.setState({ time: `${hour}:${minute}` });
    }
  }

  render() {
    let dateValue;
    if (this.state.date) {
      dateValue = moment(this.state.date)
        .format('ddd, DD MMM YY');
    }

    return (
      <BaseView>
        <Toolbar title="Schedule Call" />

          <View style={styles.fieldset}>
            <TouchableNativeFeedback onPress={this.handleDatePress}>
              <View style={styles.dateContainer}>
                <Label title="DATE" />
                <Value value={dateValue} placeholder="Add date" />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={this.handleTimePress}>
              <View style={styles.timeContainer}>
                <Label title="TIME" />
                <Value value={this.state.time} placeholder="Add time" />
              </View>
            </TouchableNativeFeedback>
          </View>
          <Separator />

          <View style={styles.fieldset}>
            <TouchableNativeFeedback onPress={this.handleDatePress}>
              <View>
                <Label title="ACTIVITY" />
                <Value
                  value={this.state.activity}
                  placeholder="Add Activity (Optional)"
                />
              </View>
            </TouchableNativeFeedback>
          </View>
          <Separator />

        <Button
          label="Schedule Call"
          handlePress={() => {
            // TODO: Hookup action.
          }}
          disabled={
            typeof this.state.date === 'undefined'
            || typeof this.state.time === 'undefined'
          }
        />
      </BaseView>
    );
  }
}
ScheduleDetail.propTypes = {
  initialDate: PropTypes.string,
  initialTime: PropTypes.string,
  initialActivity: PropTypes.object,
};

export default ScheduleDetail;
