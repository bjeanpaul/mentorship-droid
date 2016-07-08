import React from 'react';
import { View, Image } from 'react-native';
import { Link } from 'react-router-native';

import { Header, Text, NavigationBar } from 'src/components';


const ProfilePicture = (props) => {

  const {
    location,
    nextPath = '/occupation',
    selectPicturePath = '/profile-picture-camera-roll',
  } = props;

  let imageSource;
  let isNextEnabled = false;
  if (location.query.imageURI) {
    isNextEnabled = true;
    imageSource = { uri: location.query.imageURI };
  } else {
    imageSource = require('app/assets/Profile_Add.png');
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Add a profile picture" />
      <Link to={selectPicturePath}>
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
        to={nextPath}
      />
    </View>
  );
};
ProfilePicture.propTypes = {
  location: React.PropTypes.object,
  selectPicturePath: React.PropTypes.string,
  nextPath: React.PropTypes.string,
};

export default ProfilePicture;
