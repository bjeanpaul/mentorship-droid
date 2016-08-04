import React from 'react';
import {
  View,
  DatePickerAndroid,
  TimePickerAndroid,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';

import moment from 'moment';

import { BaseView, Container, Text, TextInput, Toolbar, Button }
  from 'src/components';


const styles = StyleSheet.create({
  label: {
    textAlign: 'left',
    color: '#80979a',
    fontSize: 12,
    marginBottom: 9,
    fontWeight: 'bold',
  },
  value: {
    textAlign: 'left',
    color: '#003035',
    fontSize: 20,
  },
  valueIsRequired: {
    color: '#f77040',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    marginTop: 50,
    marginBottom: 44,
  },
});

const Label = ({ title }) => <Text style={styles.label}>{ title }</Text>;
const Separator = () => <View style={styles.separator} />;
const Value = ({ value, placeholder }) => (
  <Text style={[styles.value, value ? undefined : styles.valueIsRequired ]}>
    { value || placeholder }
  </Text>
);


class ScheduleDetail extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      date: this.props.date,
      time: this.props.time,
      activity: this.props.activity,
    }

    this.handleDatePress = this.handleDatePress.bind(this);
    this.handleTimePress = this.handleTimePress.bind(this);
  }

  async handleDatePress() {
    const {action, year, month, day} = await DatePickerAndroid.open({
      date: this.state.date ? moment(this.state.date).toDate() : new Date(),
      minDate: new Date(),
    });
    if (action === DatePickerAndroid.dateSetAction) {
      this.setState({ date: moment(new Date(year, month, day)).format('YYYY-MM-DD') });
    }
  }

  async handleTimePress() {
    const {action, hour, minute} = await TimePickerAndroid.open({ is24Hour: true });
    if (action === TimePickerAndroid.timeSetAction) {
      this.setState({ time: `${hour}:${minute}` });
    }
  }

  render() {
    let dateValue;
    if (this.state.date) {
      dateValue = moment(this.state.date)
        .format('dddd, Do MMMM YYYY');
    }

    return (
      <BaseView>
        <Toolbar title="Schedule Call" />

        <Container>
          <View style={{ flexDirection: 'row' }}>
            <TouchableNativeFeedback onPress={this.handleDatePress}>
              <View style={{ flex: 1 }}>
                <Label title="DATE" />
                <Value value={dateValue} placeholder="Add date" />
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={this.handleTimePress}>
              <View style={{ flex: .7 }}>
                <Label title="TIME" />
                <Value value={this.state.time} placeholder="Add time" />
              </View>
            </TouchableNativeFeedback>
          </View>
          <Separator />
          <TouchableNativeFeedback onPress={this.handleDatePress}>
            <View>
              <Label title="ACTIVITY" />
              <Value
                value={this.state.activity}
                placeholder="Add Activity (Optional)" />
            </View>
          </TouchableNativeFeedback>
          <Separator />
        </Container>

        <Button
          label='SCHEDULE CALL'
          disabled={this.state.date === undefined ||
            this.state.time === undefined}
        />
      </BaseView>
    );
  };
}

export default ScheduleDetail;
