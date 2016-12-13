import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { formatDateRelatively } from 'src/helpers';
import { Text } from 'src/components';
import Event from './Event';
import styles from './styles';


const EventGroup = ({
  date,
  items,
}) => (
  <View>
    <View style={styles.groupLabel}>
      <Text style={styles.groupLabelText}>{formatDateRelatively(date)}</Text>
    </View>

    {
      items
        .filter(Event.isRenderable)
        .map(event => <Event key={event.id} event={event} />)
    }
  </View>
);


EventGroup.propTypes = {
  date: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
  })).isRequired,
};


export default EventGroup;
