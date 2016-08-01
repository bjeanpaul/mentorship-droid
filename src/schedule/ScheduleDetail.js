import React from 'react';
import {
  View,
  TimePickerAndroid,
  TouchableWithoutFeedback,
} from 'react-native';

import { Text, TextInput, Heading, Button } from 'src/components';


class ScheduleDetail extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;

    const {
      date,
      time,
      activity,
    } = props;

    this.state = {
      date,
      time,
      activity,
    }
  }

  async handleTimePress() {
    const {action, hour, minute} = await TimePickerAndroid.open({
      hour: 14,
      minute: 0,
      is24Hour: false, // Will display '2 PM'
    });

  }

  render() {
    return (
      <View>
        <Heading title="Schedule Call" />
        <View>

            <Text>DATE</Text>
            <Text>Add date</Text>

            <Text>TIME</Text>
            <TouchableWithoutFeedback onClick={this.handleTimePress}>
              <Text>Add time</Text>
            </TouchableWithoutFeedback>
        </View>
        <View>
          <Text>ACTIVITY</Text>
          <Text>Add Activity (Optional)</Text>
        </View>

        <Button label="Schedule Call" />
      </View>
    );
  };
}

export default ScheduleDetail;
