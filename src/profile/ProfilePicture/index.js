import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import { BaseView, Toolbar, Text } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const ProfilePicture = ({
  picturePath,
  onChoosePhotoPress,
}) => (
  <BaseView>
    <Toolbar title="Add a profile picture" />
    <TouchableWithoutFeedback onPress={onChoosePhotoPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            picturePath && { uri: picturePath } ||
            images.PROFILE_FACE_ADD
          }
        />
        <Text style={styles.imageLabel}>Choose Photo</Text>
        </View>
      </TouchableWithoutFeedback>
  </BaseView>
);
ProfilePicture.propTypes = {
  picturePath: React.PropTypes.string,
  onChoosePhotoPress: React.PropTypes.func.isRequired,
};

export default ProfilePicture;
