import React, { PropTypes } from 'react';
import { View, Image, ScrollView } from 'react-native';
import images from 'src/constants/images';
import eventTypeContainers from 'src/containers/events';

const EventList = ({
  events = [],
}) => {

  // eventTypeContainers

  events.map(event => {
    console.log(event);
  })

  return (
    <View>
      <Image source={images.JOURNEY_BG}>
        <ScrollView>
        </ScrollView>
      </Image>
    </View>
  );
};


EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
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
