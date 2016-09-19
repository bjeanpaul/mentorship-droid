import React, { PropTypes } from 'react';
import { Image, View } from 'react-native';

import images from 'src/constants/images';
import { BaseView, Header, HeaderIcon, Text } from 'src/components';
import styles from 'src/components/Overlay/Completed/styles';


const CompletedOverlay = ({
  title,
  onDismissPress,
}) => (
  <BaseView style={styles.base}>
    <Header style={styles.header}>
      {
        onDismissPress && <HeaderIcon
          uid="dismiss"
          type={HeaderIcon.types.dismissLight}
          onPress={onDismissPress}
        />
      }
    </Header>

    <View style={styles.body}>
      <Image source={images.OVERLAY_DONE} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </BaseView>
);


CompletedOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  onDismissPress: PropTypes.func,
};


export default CompletedOverlay;
