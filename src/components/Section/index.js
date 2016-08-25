import React, { PropTypes } from 'react';
import { View } from 'react-native';

import Text from 'src/components/Text';
import styles from './styles';


export const Section = ({
  title,
  children,
}) => (
  <View style={styles.section}>
    <View style={styles.header}>
      <Text style={Text.types.sectionTitle}>{title}</Text>
    </View>

    <Text style={Text.types.paragraph}>{children}</Text>
  </View>
);


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};


export default Section;
