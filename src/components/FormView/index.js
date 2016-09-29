import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import BaseView from 'src/components/BaseView';
import styles from './styles';


class FormView extends React.Component {
  componentWillUnmount() {
    dismissKeyboard();
  }

  render() {
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={dismissKeyboard}>
        <View style={styles.container}>
          <BaseView {...this.props} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default FormView;
