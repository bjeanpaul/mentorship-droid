import React from 'react';
import { View } from 'react-native';

import { Header, NavigationBar } from 'src/components';


// TODO: Some inputs have hints.
class FormView extends React.Component {

  constructor({
    title,
    inputFields = {},
    navigationBarProps,
  }) {
    super();


    this.inputFields = inputFields;
    this.title = title;
    this.navigationBarProps = navigationBarProps;

    // Create a state object based off of the keys in inputFields; the state
    // holds the `text` that's entered into the inputs.
    const tmpState = {};
    Object.keys(this.inputFields).forEach((key) => { tmpState[key] = ''; });
    this.state = tmpState;
  }

  inputFieldsEmpty() {
    return Object.keys(this.state).some((key) => this.state[key].length === 0);
  }

  render() {
    const fields = Object.keys(this.inputFields).map((key, index) => {
      const field = this.inputFields[key];
      return (
        <field.component {...field.componentProps}
          key={`input-${index}`}
          value={this.state[key]}
          onChangeText={(text) => this.setState({ [key]: text })}
        />
      );
    });


    return (
      <View style={{ flex: 1 }}>
        <Header title={this.props.title} />
        {fields}
        <NavigationBar
          nextEnabled={!this.inputFieldsEmpty()}
          {...this.navigationBarProps}
        />
      </View>
    );
  }
}

FormView.propTypes = {
  title: React.PropTypes.string.isRequired,
  inputFields: React.PropTypes.object.isRequired,
  navigationBarProps: React.PropTypes.object,
};

export default FormView;
