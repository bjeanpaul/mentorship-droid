import React, { PropTypes } from 'react';
import { BaseView, Header, Text, Link } from 'src/components';

import styles from './styles';


const ScheduleCallsHeader = ({
  date,
  onDatePress,
}) => (
  <Header style={styles.header}>
    <Text style={styles.nextCallLabel}>NEXT CALL</Text>
    <Link
      style={[styles.date, date && styles.hasDate]}
      onPress={onDatePress}
    >
      {date || 'Schedule your first call'}
    </Link>
  </Header>
);
ScheduleCallsHeader.propTypes = {
  date: PropTypes.string,
  onDatePress: PropTypes.func,
};

const Journey = () => {
  return (
    <BaseView>
      <ScheduleCallsHeader date="Thursday, 12th Dec" />


    </BaseView>
  );
};


export default Journey;
