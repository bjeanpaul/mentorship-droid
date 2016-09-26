import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { BaseView, Text, Button, Step } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const Greeting = ({
  firstName,
  onCompleteProfilePress,
}) => (
  <Step>
    <BaseView style={styles.base}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images.PROFILE_FACE}
        />
      </View>
      <Text style={styles.welcome}>Welcome {firstName}</Text>
        <Text style={styles.intro}>
        Help build a vibrant mentor community. Complete your profile to allow
        others learn more about you.
      </Text>
      <Button onPress={onCompleteProfilePress}>
        COMPLETE PROFILE
      </Button>
    </BaseView>
  </Step>
);


Greeting.propTypes = {
  firstName: PropTypes.string,
  onCompleteProfilePress: PropTypes.func.isRequired,
};


export default Greeting;
