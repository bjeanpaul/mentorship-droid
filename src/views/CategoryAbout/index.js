import React, { PropTypes } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Section } from 'src/components';

import styles from './styles';


const CategoryAbout = ({
  category: {
    image,
    title,
    about,
    goal,
  },
}) => (
  <ScrollView>
    <View style={styles.imageContainer}>
      {image.exists() && <Image source={image.toSource()} style={styles.image} />}
    </View>

    <Section title={`About ${title}`}>{about}</Section>
    <Section title={`Goal of ${title}`}>{goal}</Section>
  </ScrollView>
);


CategoryAbout.propTypes = {
  category: PropTypes.object.isRequired,
};


export default CategoryAbout;
