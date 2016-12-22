import { some, isPlainObject } from 'lodash';
import moment from 'moment';
import React, { PropTypes } from 'react';
import {
  View, DatePickerAndroid, TimePickerAndroid, TouchableNativeFeedback,
} from 'react-native';

import { Header, Icon, HeaderIcon, BaseView, Text, Label, Button } from 'src/components';

import styles from 'src/views/ScheduleDetail/styles';


const dateFromMoment = m => {
  if (isPlainObject(m)) return m;

  const {
    years: year,
    months: month,
    date,
  } = moment(m).toObject();

  return {
    year,
    month,
    date,
  };
};


const timeFromMoment = m => {
  if (isPlainObject(m)) return m;

  const {
    hours: hour,
    minutes: minute,
  } = moment(m).toObject();

  return {
    hour,
    minute,
  };
};


const parseDateProps = (initialDate, initialTime, initialCallTime) => {
  let date = null;
  let time = null;

  if (initialDate) {
    date = dateFromMoment(initialDate);
  }

  if (initialTime) {
    time = timeFromMoment(initialTime);
  }

  if (initialCallTime) {
    date = dateFromMoment(initialCallTime);
    time = timeFromMoment(initialCallTime);
  }

  return {
    date,
    time,
  };
};


const Separator = () => <View style={styles.separator} />;


const Value = ({
  uid,
  value,
  removeUid,
  placeholder,
  onPress,
  onRemovePress,
}) => (
  <View style={styles.valueContainer}>
    <TouchableNativeFeedback uid={uid} onPress={onPress}>
      <View style={styles.value}>
        <Text style={[styles.valueText, !value && styles.valueTextRequired]}>
          {value || placeholder}
        </Text>
      </View>
    </TouchableNativeFeedback>

    {
      onRemovePress && !!value && (
        <TouchableNativeFeedback uid={removeUid} onPress={onRemovePress}>
          <View style={styles.valueRemove}>
            <Icon style={styles.valueRemoveIcon} type={Icon.types.dismissDark} />
          </View>
        </TouchableNativeFeedback>
      )
    }
  </View>
);


Value.propTypes = {
  uid: PropTypes.string,
  value: PropTypes.string,
  removeUid: PropTypes.string,
  placeholder: PropTypes.string,
  onPress: PropTypes.func,
  onRemovePress: PropTypes.func,
};


class ScheduleDetail extends React.Component {
  constructor(props) {
    super(props);

    const {
      initialDate = null,
      initialTime = null,
      initialCallTimeHasChanged = false,
    } = props;

    this.state = {
      ...parseDateProps(initialDate, initialTime, this.props.initialCallTime),
      timeHasChanged: initialCallTimeHasChanged,
    };

    this.onDonePress = this.onDonePress.bind(this);
    this.onDatePress = this.onDatePress.bind(this);
    this.onTimePress = this.onTimePress.bind(this);
    this.onActivityPress = this.onActivityPress.bind(this);
  }

  async onDatePress() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: this.state.date ? moment(this.state.date).toDate() : new Date(),
      minDate: new Date(),
    });

    const date = {
      year,
      month,
      date: day,
    };

    if (action === DatePickerAndroid.dateSetAction) {
      this.setState({
        date,
      });
    }
  }

  async onTimePress() {
    const { action, hour, minute } = await TimePickerAndroid.open({
      is24Hour: false,
    });

    if (action === TimePickerAndroid.timeSetAction) {
      this.setState({
        time: {
          hour,
          minute,
        },
        timeHasChanged: true,
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

  onActivityPress() {
    const {
      date,
      time,
    } = this.state;

    this.props.onActivityPress({
      date,
      time,
    });
  }

  onActivityRemovePress() {
    this.setState({ activity: null });
  }

  dateIsColliding() {
    const date = this.state.date;
    return this.props.callTimes
      .some(callTime => moment(date).isSame(callTime, 'day'));
  }

  timeIsInPast() {
    return moment({
      ...this.state.date,
      ...this.state.time,
    })
    .isBefore();
  }

  render() {
    const date = this.state.date && moment(this.state.date).format('ddd, DD MMM YY');
    const time = this.state.time && moment(this.state.time).format('h:mm a');
    const isInPast = this.timeIsInPast();
    const isColliding = this.dateIsColliding();

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
            <View style={styles.dateContainer}>
              <Label title="DATE" />

              <Value
                uid="date"
                onPress={this.onDatePress}
                value={date}
                placeholder="Add date"
              />
            </View>

            <View style={styles.timeContainer}>
              <Label title="TIME" />

              <Value
                uid="time"
                value={time}
                onPress={this.onTimePress}
                placeholder="Add time"
              />
            </View>
          </View>

          {
            isColliding && <Text style={styles.fieldError}>
              You already have a call on this day
            </Text>
          }

          {
            !isColliding && isInPast && this.state.timeHasChanged && (
              <Text style={styles.fieldError}>
                This date and time have already passed
              </Text>
            )
          }

          <Separator />

          <View style={styles.fieldset}>
            <View style={styles.activityContainer}>
              <Label title="ACTIVITY" />

              <Value
                uid="activity"
                removeUid="removeActivity"
                value={this.props.activity && this.props.activity.title}
                placeholder="Add Activity (Optional)"
                onPress={this.onActivityPress}
                onRemovePress={this.props.onActivityRemovePress}
              />
            </View>
          </View>

          <Separator />
        </View>

        <View style={styles.footer}>
          <Button
            uid="done"
            onPress={this.onDonePress}
            disabled={some([!this.state.date, !this.state.time, isColliding, isInPast])}
          >
            SCHEDULE CALL
          </Button>
        </View>
      </BaseView>
    );
  }
}


ScheduleDetail.propTypes = {
  callTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDismissPress: PropTypes.func.isRequired,
  onActivityPress: PropTypes.func.isRequired,
  onActivityRemovePress: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  initialTime: PropTypes.any,
  initialDate: PropTypes.any,
  initialCallTime: PropTypes.any,
  initialCallTimeHasChanged: PropTypes.bool,
  activity: PropTypes.object,
};


export default ScheduleDetail;
