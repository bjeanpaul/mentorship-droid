import React from 'react';
import { View } from 'react-native';

import { Header, TextInput, NavigationBar } from 'src/components';


class FormView extends React.Component {

  constructor({
    title,
    inputFields,
    navigationBarProps,
  }) {
    super();
    this.inputs = inputFields;
    this.title = title;
    this.navigationBarProps = navigationBarProps;
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={this.props.title} />
        {this.inputs.map((input, key) => (
          <input.component
            placeholder={input.placeholder}
            onChangeText={(text) => this.setState({ key: text })}
            value={this.state[key]}
          />
        ))}
        <TextInput placeholder="Type your answer here"
          onChangeText={(motivation) => this.setState({ motivation })}
          value={this.state.motivation}
        />
      <NavigationBar {...this.props.navigationBarProps} to="own-mentors" />
      </View>
    );
  }
}

FormView.propTypes = {
  title: React.PropTypes.string.isRequired,
  inputs: React.PropTypes.object.isRequired,
  navigationBarProps: React.PropTypes.object,
};

export default MoFormViewtivation;
