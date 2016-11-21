import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import { Text, FormStep } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const ProfilePicture = ({
  profile: { profilePic },
  onChoosePhotoPress,
  ...props,
}) => (
  <FormStep
    title="Add a profile picture"
    paginationDisabled={!profilePic}
    {...props}
  >
    <TouchableWithoutFeedback onPress={onChoosePhotoPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            profilePic
              ? { uri: profilePic }
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
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default ProfilePicture;
