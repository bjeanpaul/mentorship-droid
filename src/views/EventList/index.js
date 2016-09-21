import React, { PropTypes } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text } from 'src/components';
import images from 'src/constants/images';
import containers from 'src/containers/events';
import FirstEventContainer from 'src/containers/FirstEventContainer';


const EventList = ({
  groups = [],
}) => {
  const groupElements = groups.map((group, index) => {
    const eventElements = group.events
    .filter(event => containers[event.eventType])
    .map(event => React.createElement(containers[event.eventType], {
      ...event,
      key: event.id,
    }));
    if (!eventElements.length) return void 0;
    return (
      <View key={index}>
        <Text>{group.label}</Text>
        {eventElements}
      </View>
    );
  }).filter(el => typeof(el) !== 'undefined');

  return (
    <View>
      <Image source={images.JOURNEY_BG}>
        <ScrollView>
          {groupElements.length && groupElements || <FirstEventContainer />}
        </ScrollView>
      </Image>
    </View>
  );
};


EventList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      occuredAt: PropTypes.string,
      eventType: PropTypes.string.isRequired,
      objectId: PropTypes.number,
    })).isRequired,
  })),
};


export default EventList;
