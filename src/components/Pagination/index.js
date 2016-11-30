import { noop } from 'lodash';
import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Button from 'src/components/Button';
import Icon from 'src/components/Icon';
import styles from './styles';


const Pagination = ({
  onBackPress = noop,
  onNextPress = noop,
  onDonePress = noop,
  backDisabled,
  disabled,
  last = false,
}) => (
  <View style={styles.container}>
    <Button
      uid="back"
      theme={Button.themes.transparent}
      layout={[Button.layouts.inline, styles.backButtonLayout]}
      onPress={onBackPress}
      disabled={backDisabled}
    >
      <Icon type={Icon.types.backOrange} />
    </Button>
    {
      !last
        ? <Button
          uid="next"
          theme={Button.themes.transparent}
          layout={[Button.layouts.inline, styles.nextButtonLayout]}
          onPress={onNextPress}
          disabled={disabled}
        >
          NEXT
        </Button>
        : <Button
          uid="done"
          theme={Button.themes.transparent}
          layout={[Button.layouts.inline, styles.nextButtonLayout]}
          onPress={onDonePress}
          disabled={disabled}
        >
          DONE
        </Button>
    }
  </View>
);


Pagination.propTypes = {
  onBackPress: PropTypes.func,
  onNextPress: PropTypes.func,
  onDonePress: PropTypes.func,
  backDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  last: PropTypes.bool,
};


export default Pagination;
