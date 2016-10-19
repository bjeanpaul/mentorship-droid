import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Button from 'src/components/Button';
import Icon from 'src/components/Icon';
import styles from './styles';


const Pagination = ({
  onBackPress,
  onNextPress,
  backDisabled,
  disabled,
}) => (
  <View style={styles.container}>
    <Button
      theme={Button.themes.transparent}
      layout={[Button.layouts.inline, styles.backButtonLayout]}
      onPress={onBackPress}
      disabled={backDisabled}
    >
      <Icon type={Icon.types.backOrange} />
    </Button>
    <Button
      theme={Button.themes.transparent}
      layout={[Button.layouts.inline, styles.nextButtonLayout]}
      onPress={onNextPress}
      disabled={disabled}
    >
      NEXT
    </Button>
  </View>
);


Pagination.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
  backDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
};


export default Pagination;
