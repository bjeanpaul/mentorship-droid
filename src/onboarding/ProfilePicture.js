import React from 'react';
import { View, Image } from 'react-native';
import { Link } from 'react-router-native';

import { Header, Text, NavigationBar } from 'src/components';


const ProfilePicture = (props) => {
  let imageSource;
  let isNextEnabled = false;
  if (props.location.query.imageURI) {
    isNextEnabled = true;
    imageSource = { uri: props.location.query.imageURI };
  } else {
    imageSource = require('app/assets/Profile_Add.png');
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Add a profile picture" />
      <Link to="camera-roll/">
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={imageSource}
          />
          <Text>Choose Photo</Text>
        </View>
      </Link>
      <NavigationBar nextEnabled={isNextEnabled}
        to="job"
      />
    </View>
  );
};
ProfilePicture.propTypes = {
  location: React.PropTypes.object,
};


export default ProfilePicture;
