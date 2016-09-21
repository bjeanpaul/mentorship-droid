import React, { PropTypes } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text } from 'src/components';
import images from 'src/constants/images';
import eventContainers from 'src/containers/events';


const EventList = ({
  groups = [],
}) => {
  const children = groups.map((group, index) => (
    <View key={index}>
      <Text>{group.label}</Text>
      {
        group.events.map(event => {
          const el = eventContainers[event.eventType];
          if (!el) return null;
          return React.createElement(el, {
            ...event,
            key: event.id,
          });
        })
      }
    </View>
  ));

  return (
    <View>
      <Image source={images.JOURNEY_BG}>
        <ScrollView>
          {children}
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
