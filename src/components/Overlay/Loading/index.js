import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { BaseView, SpinningImage, Header, HeaderIcon, Text } from 'src/components';
import styles from 'src/components/Overlay/Loading/styles';


const LoadingOverlay = ({
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
      <SpinningImage />
      <Text style={styles.title}>{title}</Text>
    </View>
  </BaseView>
);


LoadingOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  onDismissPress: PropTypes.func,
};


export default LoadingOverlay;
