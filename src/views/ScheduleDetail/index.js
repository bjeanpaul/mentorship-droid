import moment from 'moment';
import React, { PropTypes } from 'react';
import {
  View, DatePickerAndroid, TimePickerAndroid, TouchableNativeFeedback,
} from 'react-native';

import { Header, HeaderIcon, BaseView, Text, Label, Button } from 'src/components';

import styles from 'src/views/ScheduleDetail/styles';


const Separator = () => <View style={styles.separator} />;


const Value = ({
  value,
  placeholder,
}) => (
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

    this.state = this.parseCallTime(this.props.initialCallTime);
    this.onDonePress = this.onDonePress.bind(this);
    this.onDatePress = this.onDatePress.bind(this);
    this.onTimePress = this.onTimePress.bind(this);
  }

  async onDatePress() {
    const { action, year, month, day: date } = await DatePickerAndroid.open({
      date: this.state.date ? moment(this.state.date).toDate() : new Date(),
      minDate: new Date(),
    });

    if (action === DatePickerAndroid.dateSetAction) {
      this.setState({
        date: {
          year,
          month,
          date,
        },
      });
    }
  }

  async onTimePress() {
    const { action, hour, minute } = await TimePickerAndroid.open({
      is24Hour: true,
    });

    if (action === TimePickerAndroid.timeSetAction) {
      this.setState({
        time: {
          hour,
          minute,
        },
      });
    }
  }

  onDonePress() {
    this.props.onDone({
      callTime: moment({
        ...this.state.date,
        ...this.state.time,
      })
      .toISOString(),
    });
  }

  parseCallTime(callTime) {
    if (!callTime) {
      return {
        date: null,
        time: null,
      };
    } else {
      const {
        years: year,
        months: month,
        date,
        hours: hour,
        minutes: minute,
      } = moment(callTime).toObject();

      return {
        date: {
          year,
          month,
          date,
        },
        time: {
          hour,
          minute,
        },
      };
    }
  }


  render() {
    const date = this.state.date && moment(this.state.date).format('ddd, DD MMM YY');
    const time = this.state.time && moment(this.state.time).format('HH:mm');

    return (
      <BaseView>
        <Header>
          <Text style={Text.types.title}>Schedule Call</Text>

          <HeaderIcon
            uid="dismiss"
            type={HeaderIcon.types.backDark}
            onPress={this.props.onDismissPress}
          />
        </Header>

        <View style={styles.body}>
          <View style={styles.fieldset}>
            <TouchableNativeFeedback uid="date" onPress={this.onDatePress}>
              <View style={styles.dateContainer}>
                <Label title="DATE" />
                <Value value={date} placeholder="Add date" />
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback uid="time" onPress={this.onTimePress}>
              <View style={styles.timeContainer}>
                <Label title="TIME" />
                <Value value={time} placeholder="Add time" />
              </View>
            </TouchableNativeFeedback>
          </View>
          <Separator />

          <View style={styles.fieldset}>
            <TouchableNativeFeedback uid="activity" onPress={this.props.onActivityPress}>
              <View>
                <Label title="ACTIVITY" />
                <Value
                  value={this.props.activity && this.props.activity.title}
                  placeholder="Add Activity (Optional)"
                />
              </View>
            </TouchableNativeFeedback>
          </View>
          <Separator />
        </View>

        <View style={styles.footer}>
          <Button
            uid="done"
            onPress={this.onDonePress}
            disabled={!this.state.date || !this.state.time}
          >
            SCHEDULE CALL
          </Button>
        </View>
      </BaseView>
    );
  }
}


ScheduleDetail.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
  onActivityPress: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  initialCallTime: PropTypes.string,
  activity: PropTypes.object,
};


export default ScheduleDetail;
