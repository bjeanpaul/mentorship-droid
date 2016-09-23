import React, { PropTypes } from 'react';
import Calendar from 'react-native-calendar';

import styles from 'src/views/ScheduleListCalendar/styles';


const ScheduleListCalendar = ({
  dates,
  onDateSelect,
}) => (
  <Calendar
    eventDates={dates}
    showControls
    prevButtonText="<"
    nextButtonText=">"
    onDateSelect={onDateSelect}
    customStyle={styles}
  />
);


ScheduleListCalendar.propTypes = {
  dates: PropTypes.array.isRequired,
  onDateSelect: PropTypes.func.isRequired,
};


export default ScheduleListCalendar;
