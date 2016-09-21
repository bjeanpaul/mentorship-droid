import React, { PropTypes } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text, Event } from 'src/components';
import images from 'src/constants/images';
import eventContainers from 'src/containers/events';


const EventList = ({
  groups = [],
}) => {
  const children = groups.map(group => {
    return (
      <View>
        <Text>{group.label}</Text>
        {
          group.events.map(event => React.createComponent(
            eventContainers[event.eventType] || Event, event
          ));
        }
      </View>
    );
  });

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
      id: PropTypes.string,
      occuredAt: PropTypes.string,
      eventType: PropTypes.string.isRequired,
      objectId: PropTypes.string,
    })).isRequired,
  })),
};


export default EventList;
