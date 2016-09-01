import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';

import { BaseView, Header, Text, Pagination, ProgressBar } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const ProfilePicture = ({
  imagePath,
  onBackPress,
  onNextPress,
  onChoosePhotoPress,
}) => (
  <BaseView>
    <ProgressBar completed={1 / 7} />
    <Header>
      <Text style={Text.types.title}>Add a profile picture</Text>
    </Header>

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

    <View style={styles.footer}>
      <Pagination
        onBackPress={onBackPress}
        onNextPress={onNextPress}
        disabled={!imagePath}
      />
    </View>
  </BaseView>
);
ProfilePicture.propTypes = {
  imagePath: React.PropTypes.string,
  onChoosePhotoPress: React.PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};

export default ProfilePicture;
