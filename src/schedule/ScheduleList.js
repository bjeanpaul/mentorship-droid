import React, {
  Component,
  PropTypes,
  View,
  ScrollView,
  Text,
} from 'react-native';
import moment from 'moment';

const SectionHeader = function SectionHeader({ title }) {
  return <Text style={{color: 'red', margin: 10}}>{ title }</Text>;
};
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const ScheduleListRow = function ScheduleListRow({ timestamp }) {
  return (
    <Text>{ moment(timestamp).format("Do MMMM YYYY, h:mm:ss a") }</Text>
  );
};

// TODO: Use ListView instead.
export class ScheduleList extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchSchedules();
  }

  render() {
    const {
      upcomingCalls,
      pastCalls,
    } = this.props;
    return (
      <View>
        <ScrollView>
          <SectionHeader title="Upcoming calls" />
            {upcomingCalls.map((call) => {
              return <ScheduleListRow key={ call.id } timestamp={ call.timestamp } />;
            })}
          <SectionHeader title="Past calls" />
            {pastCalls.map((call) => {
              return <ScheduleListRow key={ call.id } timestamp={ call.timestamp } />;
            })}
        </ScrollView>
      </View>
    );
  }
}
ScheduleList.propTypes = {
  upcomingCalls: PropTypes.array.isRequired,
  pastCalls: PropTypes.array.isRequired,
  fetchSchedules: PropTypes.func.isRequired,
};
