import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { BaseView, Toolbar, Text } from 'src/components';
import IMAGE_PROFILE_ADD from 'app/assets/Profile_Add.png';
import colors from 'src/constants/colors';

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 19,
  },
  imageLabel: {
    color: colors.PROFILE_PICTURE_CHOOSE_PHOTO_TEXT,
    fontSize: 18,
  },
});

const ProfilePicture = ({
  picturePath,
}) => (
  <BaseView>
    <Toolbar title="Add a profile picture" />
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={picturePath && { uri: picturePath } || IMAGE_PROFILE_ADD}
      />
      <Text style={styles.imageLabel}>Choose Photo</Text>
    </View>
  </BaseView>
);
ProfilePicture.propTypes = {
  picturePath: React.PropTypes.string,
};

export default ProfilePicture;
