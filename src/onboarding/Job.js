import React from 'react';
import { View, Image } from 'react-native';
import { Link } from 'react-router-native';

import { Header, TextInput, NavigationBar } from 'src/components';


class ProfilePicture extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      jobTitle: '',
      jobSector: '',
    };
  }

  isNextEnabled() {
    return this.state.jobTitle.length > 0 && this.state.jobSector.length > 0;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="What do you do?" />
        <TextInput placeholder="Job Sector"
          onChangeText={(jobSector) => this.setState({ jobSector })}
          value={this.state.jobSector}
        />
        <TextInput placeholder="Job Title"
          onChangeText={(jobTitle) => this.setState({ jobTitle })}
          value={this.state.jobTitle}
        />
        <NavigationBar nextEnabled={this.isNextEnabled()} to="motivation" />
      </View>
    );
  }
}
ProfilePicture.propTypes = {
  location: React.PropTypes.object,
};


export default ProfilePicture;
