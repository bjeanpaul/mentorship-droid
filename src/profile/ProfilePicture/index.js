import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import { BaseView, Toolbar, Text, Pagination } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const ProfilePicture = ({
  imagePath,
  onChoosePhotoPress,
}) => (
  <BaseView>
    <Toolbar title="Add a profile picture" />
    <TouchableWithoutFeedback onPress={onChoosePhotoPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            imagePath && { uri: imagePath } ||
            images.PROFILE_FACE_ADD
          }
        />
        <Text style={styles.imageLabel}>Choose Photo</Text>
        </View>
      </TouchableWithoutFeedback>
      <Pagination
        onBackPress={() => console.log('12312312')}
        onNextPress={() => console.log('12312312')}
      />
  </BaseView>
);
ProfilePicture.propTypes = {
  imagePath: React.PropTypes.string,
  onChoosePhotoPress: React.PropTypes.func.isRequired,
};

export default ProfilePicture;
