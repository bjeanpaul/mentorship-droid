import React, { PropTypes } from 'react';
import { Image, View } from 'react-native';

import images from 'src/constants/images';
import { BaseView, Header, HeaderIcon, Button, Text } from 'src/components';
import styles from 'src/views/CallCompleted/styles';


const CallCompleted = ({
  onDismissPress,
  onAddCallNotesPress,
}) => (
  <BaseView style={styles.base}>
    <Header style={styles.header}>
      <HeaderIcon
        uid="dismiss"
        type={HeaderIcon.types.dismissLight}
        onPress={onDismissPress}
      />
    </Header>

    <View style={styles.body}>
      <View style={styles.contentContainer}>
        <Image source={images.OVERLAY_DONE} />
        <Text style={styles.title}>Call completed</Text>

        <Text style={[Text.themes.light, styles.message]}>
          Nice going! Time to add some notes to that call.
        </Text>
      </View>

      <View style={styles.actionContainer}>
        <Button
          uid="addCallNotes"
          theme={Button.themes.light}
          layout={Button.layouts.stretch}
          onPress={onAddCallNotesPress}
        >
          ADD CALL NOTES
        </Button>
      </View>
    </View>
  </BaseView>
);


CallCompleted.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
  onAddCallNotesPress: PropTypes.func.isRequired,
};


export default CallCompleted;
