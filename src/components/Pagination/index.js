import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Button from 'src/components/Button';
import styles from './styles';


const Pagination = ({
  onBackPress,
  onNextPress,
  disabled,
}) => (
  <View style={styles.container}>
    <Button
      theme={Button.themes.transparent}
      layout={[Button.layouts.inline, styles.backButtonLayout]}
      onPress={onBackPress}
      label="BACK"
    />
    <Button
      theme={Button.themes.transparent}
      layout={[Button.layouts.inline, styles.nextButtonLayout]}
      onPress={onNextPress}
      disabled={disabled}
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
