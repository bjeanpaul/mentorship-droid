import React, {
  Component,
} from 'react';

import { Link } from 'react-router-native';

import {
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import {
  Text,
  Heading,
  Button,
} from 'src/components';


class ProfilePicture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileSource: this.props.location.query.uri || "app/assets/Profile_Add.png",
    };
  }

  render() {

    console.log(this.props.location.query.uri)

    return (
      <View style={{ flex: 1 }}>
        <Heading>Add a profile picture</Heading>
        <Image
          style={{
            width: 100,
            height: 100,
            margin: 10,
          }}
          source={{ uri: this.state.profileSource }}
        />
        <Link to="camera-roll">
          <Button>Take Photo</Button>
        </Link>
      </View>
    );
  }
}

export default ProfilePicture;
