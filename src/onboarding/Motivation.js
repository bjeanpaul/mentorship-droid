import React from 'react';
import { View } from 'react-native';

import { Header, TextInput, NavigationBar } from 'src/components';


class Motivation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      motivation: '',
    };
  }

  isNextEnabled() {
    return this.state.motivation.length > 0;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Why did you become a mentor?" />
        <TextInput placeholder="Type your answer here"
          onChangeText={(motivation) => this.setState({ motivation })}
          value={this.state.motivation}
        />
        <NavigationBar nextEnabled={this.isNextEnabled()} to="own-mentors" />
      </View>
    );
  }
}

export default Motivation;
