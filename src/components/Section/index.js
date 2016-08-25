import React, { PropTypes } from 'react';
import { View } from 'react-native';

import SectionTitle from 'src/components/SectionTitle';
import Paragraph from 'src/components/Paragraph';
import styles from './styles';


export const Section = ({
  title,
  children,
}) => (
  <View style={styles.section}>
    <View style={styles.header}>
      <SectionTitle>{title}</SectionTitle>
    </View>

    <Paragraph>{children}</Paragraph>
  </View>
);


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};


export default Section;
