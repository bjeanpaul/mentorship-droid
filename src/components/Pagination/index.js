import { noop, debounce } from 'lodash';
import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';

import Button from 'src/components/Button';
import Icon from 'src/components/Icon';
import styles from './styles';

import { PAGING_DEBOUNCE_INTERVAL } from 'src/constants/behavior';


const debouncePager = fn => debounce(fn, PAGING_DEBOUNCE_INTERVAL, {
  leading: true,
  trailing: false,
});


class Pagination extends Component {
  static defaultProps = {
    onBackPress: noop,
    onNextPress: noop,
    onDonePress: noop,
    last: false,
  }

  static propTypes = {
    onBackPress: PropTypes.func,
    onNextPress: PropTypes.func,
    onDonePress: PropTypes.func,
    backDisabled: PropTypes.bool,
    disabled: PropTypes.bool,
    last: PropTypes.bool,
  }

  constructor(...args) {
    super(...args);
    this.onDonePress = debouncePager(this.onDonePress.bind(this));
    this.onNextPress = debouncePager(this.onNextPress.bind(this));
    this.onBackPress = debouncePager(this.onBackPress.bind(this));
  }

  onDonePress() {
    this.props.onDonePress();
  }

  onNextPress() {
    this.props.onNextPress();
  }

  onBackPress() {
    this.props.onBackPress();
  }

  render() {
    const {
      backDisabled,
      disabled,
      last,
    } = this.props;

    return (
      <View style={styles.container}>
        <Button
          uid="back"
          theme={Button.themes.transparent}
          layout={[Button.layouts.inline, styles.backButtonLayout]}
          onPress={this.onBackPress}
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
          onPress={this.onNextPress}
          disabled={disabled}
        >
          NEXT
        </Button>
        : <Button
          uid="done"
          theme={Button.themes.transparent}
          layout={[Button.layouts.inline, styles.nextButtonLayout]}
          onPress={this.onDonePress}
          disabled={disabled}
        >
          DONE
        </Button>
        }
      </View>
    );
  }
}


export default Pagination;
