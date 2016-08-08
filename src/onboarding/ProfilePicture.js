import React from 'react';
import { View, Image } from 'react-native';
import { Header, Text, NavigationBar } from 'src/components';
import IMAGE_PROFILE_ADD from 'app/assets/Profile_Add.png';


const ProfilePicture = (props) => {
  const {
    location,
    nextPath = '/occupation',
  } = props;

  let imageSource;
  let isNextEnabled = false;
  if (location.query.imageURI) {
    isNextEnabled = true;
    imageSource = { uri: location.query.imageURI };
  } else {
    imageSource = IMAGE_PROFILE_ADD;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Add a profile picture" />
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
      <NavigationBar
        nextEnabled={isNextEnabled}
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
