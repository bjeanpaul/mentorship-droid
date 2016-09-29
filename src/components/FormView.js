import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import BaseView from 'src/components/BaseView';

class FormView extends React.Component {
  componentWillUnmount() {
    dismissKeyboard();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
        <BaseView {...this.props} />
      </TouchableWithoutFeedback>
    );
  }
}

export default FormView;
