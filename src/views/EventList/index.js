import React, { PropTypes } from 'react';
import { View } from 'react-native';

import FirstEventContainer from 'src/containers/FirstEventContainer';
import EventGroup from './EventGroup';
import { groupEvents } from './parse';
import styles from './styles';


const EventList = ({
  events = [],
}) => {
  return (
    <View style={styles.container}>
    {
      events.length
        ? groupEvents(events).map(group => <EventGroup key={group.date} {...group} />)
        : <FirstEventContainer />
    }
    </View>
  );
};


EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};


export default EventList;
