import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import Text from 'src/components/Text';
import { defineRadioItem } from 'src/components/defineRadio';
import images from 'src/constants/images';
import styles from './styles';


const RadioItem = defineRadioItem(({
  children,
  selected,
  onSelect,
  iconSelected = images.ITEM_SELECTED,
  iconUnselected = images.ITEM_UNSELECTED,
}) => (
  <TouchableWithoutFeedback onPress={onSelect}>
    <View style={styles.item}>
      <Text style={styles.itemLabel}>
        {children}
      </Text>

      <Image
        style={styles.itemImage}
        source={
          selected
            ? iconSelected
            : iconUnselected
        }
      />
    </View>
  </TouchableWithoutFeedback>
));

RadioItem.component.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.any,
  onSelect: PropTypes.func,
  iconSelected: PropTypes.any,
  iconUnselected: PropTypes.any,
};


export default RadioItem;
