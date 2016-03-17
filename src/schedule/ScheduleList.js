import React, {
  PropTypes,
  View,
  ScrollView,
  Text,
} from 'react-native';


const SectionHeader = function SectionHeader({ title }) {
  return <Text>{ title }</Text>;
};
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};


export const ScheduleList = function ScheduleList({ upcomingCalls, pastCalls }) {

  return (
    <View>
      <ScrollView>
        <SectionHeader title="Upcoming calls" />
          {upcomingCalls.map((call, i) => {
            return <Text key={call.id}>{ call.timestamp }</Text>;
          })}
        <SectionHeader title="Past calls" />
          {pastCalls.map((call, i) => {
            return <Text key={call.id}>{ call.timestamp }</Text>;
          })}
      </ScrollView>
    </View>
  );
};
ScheduleList.propTypes = {
  upcomingCalls: PropTypes.array,
  pastCalls: PropTypes.array,
};
