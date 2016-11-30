import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import { Text, FormStep } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const ProfilePicture = ({
  profile: { profilePictureUploadPath },
  onChoosePhotoPress,
  ...props,
}) => (
  <FormStep
    title="Add a profile picture"
    paginationDisabled={!profilePictureUploadPath}
    {...props}
  >
    <TouchableWithoutFeedback uid="choosePhoto" onPress={onChoosePhotoPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            profilePictureUploadPath
              ? { uri: profilePictureUploadPath }
              : images.PROFILE_FACE_ADD
          }
        />
        <Text style={styles.imageLabel}>Choose Photo</Text>
      </View>
    </TouchableWithoutFeedback>
  </FormStep>
);


ProfilePicture.propTypes = {
  profile: PropTypes.object.isRequired,
  onChoosePhotoPress: PropTypes.func.isRequired,
  onBackPress: PropTypes.func,
  onNextPress: PropTypes.func,
};


export default ProfilePicture;
