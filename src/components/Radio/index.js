import React from 'react';
import { View } from 'react-native';

import defineRadio from 'src/components/defineRadio';
import RadioItem from './RadioItem';
import styles from './styles';


const Radio = defineRadio(({
  children,
}) => (
  <View style={styles.container}>
    {children}
  </View>
));


export { RadioItem };
export default Radio;
