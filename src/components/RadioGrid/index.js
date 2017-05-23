import React, { PropTypes } from 'react';
import { View } from 'react-native';

import defineRadio from 'src/components/defineRadio';
import RadioGridItem from './RadioGridItem';
import styles from './styles';


const RadioGrid = defineRadio(({
  children,
}) => (
  <View style={styles.container}>
    <View style={styles.grid}>
      {children}
    </View>
  </View>
));

RadioGrid.propTypes = {
  children: PropTypes.any,
};


export { RadioGridItem };
export default RadioGrid;
