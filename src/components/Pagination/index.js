import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Button from 'src/components/Button';
import styles from './styles';


const Pagination = ({
  onBackPress,
  onNextPress,
  disabled,
}) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-around'
  }}>
    <Button
      onPress={onBackPress}
      label="BACK"
    />
    <Button
      disabled={disabled}
      onPress={onNextPress}
      label="NEXT"
    />
  </View>
);


Pagination.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};


export default Pagination;
