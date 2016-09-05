import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import FormStep from 'src/containers/OnboardingFormStepContainer';
import { Text } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const OnboardingStepProfilePicture = ({
  profilePicture,
  onChoosePhotoPress,
}) => (
  <FormStep
    title="Add a profile picture"
    paginationDisabled={!profilePicture}
  >
    <TouchableWithoutFeedback onPress={onChoosePhotoPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            profilePicture && { uri: profilePicture } ||
            images.PROFILE_FACE_ADD
          }
        />
        <Text style={styles.imageLabel}>Choose Photo</Text>
      </View>
    </TouchableWithoutFeedback>
  </FormStep>
);


OnboardingStepProfilePicture.propTypes = {
  profilePicture: PropTypes.string,
  onChoosePhotoPress: PropTypes.func.isRequired,
};

export default OnboardingStepProfilePicture;
