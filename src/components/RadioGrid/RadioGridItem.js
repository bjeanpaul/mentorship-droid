import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import Text from 'src/components/Text';
import { defineRadioItem } from 'src/components/defineRadio';
import images from 'src/constants/images';
import styles from './styles';


const RadioGridItem = defineRadioItem(({
  image,
  children,
  selected,
  onSelect,
}) => (
  <TouchableWithoutFeedback onPress={onSelect}>
    <View style={styles.item}>
      <Image
        style={[styles.image, selected && styles.imageIsSelected]}
        source={image}
      >
        { !selected && <View style={styles.imageHighlight} /> }
      </Image>
      <Text style={styles.label}>{children}</Text>
    </View>
  </TouchableWithoutFeedback>
));


RadioGridItem.component.propTypes = {
  image: PropTypes.any,
  children: PropTypes.any,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.any,
};


RadioGridItem.defaultProps = {
  iconSelected: images.YES_SELECTED,
  iconUnselected: images.YES,
};


export default RadioGridItem;
